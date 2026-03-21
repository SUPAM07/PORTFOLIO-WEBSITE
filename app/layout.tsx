import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Supam Roy | Portfolio',
    template: 'Supam Roy | %s',
  },
  description:
    "Supam Roy is an avid full stack web developer building websites and applications you'd love to use",
  keywords: [
    'supam roy',
    'supam',
    'roy',
    'web developer portfolio',
    'supam web developer',
    'supam developer',
    'mern stack',
    'supam roy portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Supam Roy's Portfolio",
    description:
      "A full-stack developer building websites that you'd like to use.",
    images: ['https://drive.google.com/file/d/1L5fOe_1rYnFHpshkyYGBN8dlVlJZn12_/view?usp=drive_link'],
    url: 'https://portfolio-website-vueh.vercel.app/contact',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
