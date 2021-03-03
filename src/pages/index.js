import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>The Hard Fork Diner (TypeScript) API</title>
      </Helmet>
      <h1>The Hard Fork Diner </h1>
      <h2>
        Now Serving Cardano{' '}
        <a
          href="https://forum.cardano.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Coffee
        </a>
        !
      </h2>
      <p>
        <a
          href="https://cardano.ideascale.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Our New Location
        </a>{' '}
        is open <a href="https://cardano.org/">for Business</a> with two
        options, <code>/Cardano</code> for a new Social Operating System and <code>/$ADA</code>{' '}
        which will finance the future{' '}
        <a href="https://docs.cardano.org/en/latest/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> Making The World Better for All 
        </a>
        .
      </p>
      <br />
      <h2>The last time you visited this page was tomorrow :</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
