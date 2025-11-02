import './globals.css';

export const metadata = {
  title: 'Agentic App',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
