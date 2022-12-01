import './globals.css';
import React from 'react';
import Navigation from './navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Decathlon AI</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
