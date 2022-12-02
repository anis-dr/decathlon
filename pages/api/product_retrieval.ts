import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  token: string;
  url: string;
};

const getProducts = async (fileUrl: string, token: string) => {
  const myHeaders = new Headers();
  myHeaders.append('x-api-key', 'b161265e-774e-4c16-ae29-024078274571');
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', 'Bearer ' + token);

  const formData = new FormData();
  formData.append('file', fileUrl);

  const res = await fetch(
    'https://api.decathlon.net/sport_vision_api/v1/productretrieval/predict/',
    {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    }
  );
  const json = res.json();
  console.log('res: ', JSON.stringify(json));
  return json;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(await getProducts(req.body.url, req.body.token));
}
