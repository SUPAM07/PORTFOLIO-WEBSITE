import { Project } from '@/types';

// Exporting projects vector
export const projects: Project[] = [
  {
    title: 'Driwwwle',
    description:
      'Discover creative websites and developers. A portal for you to share your projects.',
    image: '/logos/driwwwle.svg',
    tags: ['react', 'nextjs', 'typescript', 'mongodb', 'tailwindcss'],
    sourceCode: 'https://github.com/itsnitinr/driwwwle',
    demo: 'https://driwwwle.com',
    slug: 'driwwwle',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    image: '/logos/vsc.svg',
    tags: ['react', 'nextjs', 'css-modules', 'typescript'],
    sourceCode: 'https://github.com/itsnitinr/vscode-portfolio',
    demo: 'https://vscode-portfolio.vercel.app',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Subtrackt',
    description:
      'A simple and elegant way to track your subscriptions and save money.',
    image: '/logos/subtrackt.svg',
    tags: ['react', 'nodejs', 'express', 'postgresql', 'stripe'],
    sourceCode: 'https://github.com/itsnitinr/subtrackt',
    slug: 'subtrackt',
  },
  {
    title: 'Coolify Deployments',
    description:
      'VSCode extension to track and deploy your Coolify applications.',
    image: '/logos/coolify.svg',
    tags: ['typescript', 'vscode-api', 'javascript'],
    sourceCode: 'https://github.com/itsnitinr/coolify-vscode-extension',
    slug: 'coolify-vscode-extension',
  },
];

