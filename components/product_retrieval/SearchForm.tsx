'use client';

import React, { useEffect, useState } from 'react';
import { Item } from '../../types/Product';

type TokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

const getApiKey = async (): Promise<TokenResponse> => {
  const myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Basic QzBlZjlkNjAxZjkwMWZmMDdkNWUzYzg3YjVkMmM1YmIyOWMzMzk1MGU6U2lhaGZnRkE0NDFSMzliaEJkSEFJZUpOV3Y4MFNBMVpia21pRXV6ZkYya2RIb1ZHYnRuZWR0Qkl3NU9yaTVySQ=='
  );
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Cookie', 'PF=pkZ7LHf59ZPSiKko4oPewW');

  const urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'client_credentials');

  const res = await fetch('https://idpdecathlon.oxylane.com/as/token.oauth2', {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  });

  return await res.json();
};

const SearchForm = ({
  setProducts,
}: {
  setProducts: (data: Item[]) => void;
}) => {
  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/product_retrieval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: fileUrl,
        token: localStorage.getItem('access_token'),
      }),
    });
    const json = await res.json();
    setProducts(json.data);
    setFileUrl('');
  };

  useEffect(() => {
    const fetchApiKey = async () => {
      const expires_in = localStorage.getItem('expires_in');
      if (
        expires_in === null ||
        (expires_in && parseInt(expires_in) < Date.now())
      ) {
        console.log('Getting Token');
        const res = await getApiKey();
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('token_type', res.token_type);
        localStorage.setItem(
          'expires_in',
          (Date.now() + res.expires_in).toString()
        );
      }
    };

    fetchApiKey().catch(console.error);
  }, []);

  return (
    <form className="mx-auto my-8 sm:flex sm:max-w-xxl" onSubmit={handleSubmit}>
      <label htmlFor="image_url" className="sr-only">
        Email address
      </label>
      <input
        onChange={(e) => setFileUrl(e.target.value)}
        value={fileUrl}
        type="image_url"
        name="image_url"
        id="image_url"
        required
        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-decathlon-500 focus:placeholder-gray-400 focus:outline-none focus:ring-decathlon-500"
        placeholder="Image URL"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-decathlon-600 py-2 px-4 text-base font-medium text-white hover:bg-decathlon-700 focus:ring-2 focus:ring-decathlon-500 focus:ring-offset-2"
        >
          Get Products
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
