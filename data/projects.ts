import { Project } from '@/types';

// Exporting projects vector
export const projects: Project[] = [
  {
    title: 'ThrottleX',
    description:
      'High-performance distributed rate limiter (Node.js + Redis) with 796k+ req/sec and adaptive traffic control.',
    image: '/logos/ThrottleX.png',
    tags: ['Node.js', 'Redis', 'typescript', 'lua', 'prometheus', 'grafana'],
    sourceCode: 'https://github.com/SUPAM07/ThrottleX',
    demo: 'https://driwwwle.com',
    slug: 'throttlex',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    image: '/logos/home.png',
    tags: ['react', 'nextjs', 'css-modules', 'typescript'],
    sourceCode: 'https://github.com/SUPAM07/PORTFOLIO-WEBSITE',
    demo: 'https://portfolio-website-vueh.vercel.app/',
    slug: 'vscode-portfolio',
  },
  {
    title: 'GenUI',
    description:
      'Developed an AI-driven React component generator using Gemini API with Monaco-based live editor for real-time rendering and faster iteration.',
    image: '/logos/GenUI.png',
    tags: ['react', 'Tailwind CSS', 'Javascript', 'Gemini API'],
    sourceCode: 'https://github.com/SUPAM07/Gen-UI',
    demo: 'https://ai-component-generator-seven.vercel.app/',
    slug: 'GENUI',
  },
  {
    title: 'Rubiks Cube Solver',
    description:
      'Computer vision Rubik’s Cube solver with real-time detection and optimal solving.',
    image: '/logos/project2.png',
    tags: ['python', 'OpenCV', 'NumPy', 'kociemba'],
    sourceCode: 'https://github.com/SUPAM07/Rubik-s-Cube-Solver-',
    demo: 'https://drive.google.com/file/d/1e1Jehq7A7n3eJeUhSfEsecYDBnvVKpFK/view',
    slug: 'cube-solver',
  },
];

