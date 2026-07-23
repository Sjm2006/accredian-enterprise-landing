import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accredian Enterprise - Transform Your Workforce',
  description: 'Upskill your workforce with industry-recognized certifications and custom learning programs. Scale from 10 to 10,000 employees with Accredian Enterprise.',
  keywords: 'enterprise learning, upskilling, workforce development, professional certifications, corporate training',
  openGraph: {
    title: 'Accredian Enterprise - Transform Your Workforce',
    description: 'Upskill your workforce with industry-recognized certifications and custom learning programs.',
    type: 'website',
    url: 'https://enterprise.accredian.com',
    siteName: 'Accredian Enterprise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise - Transform Your Workforce',
    description: 'Upskill your workforce with industry-recognized certifications and custom learning programs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0055CC" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%230055CC'>A</text></svg>" />
      </head>
      <body className="antialiased bg-white text-dark">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}