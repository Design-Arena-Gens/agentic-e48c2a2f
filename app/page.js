"use client";
import { useState } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchApi() {
    try {
      setLoading(true);
      const res = await fetch('/api/hello');
      const data = await res.json();
      setMessage(data.message);
    } catch (e) {
      setMessage('Failed to fetch API');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Welcome ??</h1>
        <p>This minimal Next.js app is live on Vercel.</p>
        <button onClick={fetchApi} disabled={loading}>
          {loading ? 'Loading?' : 'Call API'}
        </button>
        {message && <p className="muted">API says: {message}</p>}
      </section>
      <footer>
        <a href="https://vercel.com" target="_blank" rel="noreferrer">Powered by Vercel</a>
      </footer>
    </main>
  );
}
