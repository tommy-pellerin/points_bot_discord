import React from 'react';
import Layout from '@theme/Layout';

export default function TestPage() {
  return (
    <Layout title="test page" description="Test React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Modifiez <code>pages/helloReact.js</code> et sauvez pour recharger.
        </p>
      </div>
    </Layout>
  );
}