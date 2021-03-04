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
      <h1>These Walled Gardens </h1>
      <h2>
        Can you emancipate yourself from{' '}
        <a
          href="https://forum.cardano.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          The system
        </a>
        !
      </h2>
      <p>
        <a
          href="https://cardano.ideascale.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          There are people that can help
        </a>{' '}
        you escape <a href="https://cardano.org/">the system</a> of
        control, <code>/Cardano</code> and enter a new Social Operating System <code>/$ADA</code>{' '}
        which will finance the future{' '}
        <a href="https://docs.cardano.org/en/latest/">economy</a> See{' '}
        <a href="/api/date">
          <code>api/date</code> Making The World Better for All 
        </a>      
       </p>
      <br />
      <h2>The last time you visited this page was tomorrow :</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
