import { Project } from '@/types';

// Exporting projects vector
export const projects: Project[] = [
  {
    title: 'ThrottleX',
    description:
      'High-performance distributed rate limiter (Node.js + Redis) with 796k+ req/sec and adaptive traffic control.',
    image: '/project_img/ThrottleX.png',
    tags: ['Node.js', 'Redis', 'typescript', 'lua', 'prometheus', 'grafana'],
    sourceCode: 'https://github.com/SUPAM07/ThrottleX',
    demo: 'https://throttlex-frontend1-vgpg.onrender.com/',
    slug: 'Throttlex',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    image: '/project_img/portfolio.png',
    tags: ['react', 'nextjs', 'css-modules', 'typescript'],
    sourceCode: 'https://github.com/SUPAM07/PORTFOLIO-WEBSITE',
    demo: 'https://portfolio-website-vueh.vercel.app/',
    slug: 'vscode-portfolio',
  },
  {
    title: 'PromptUI',
    description:
      'Developed an AI-driven React component generator using Gemini API with Monaco-based live editor for real-time rendering and faster iteration.',
    image: '/project_img/PromptUI.png',
    tags: ['react', 'Tailwind CSS', 'Javascript', 'Gemini API'],
    sourceCode: 'https://github.com/SUPAM07/PromptUI',
    demo: 'https://ai-component-generator-seven.vercel.app/',
    slug: 'PromptUI',
  },
  {
    title: 'cubeVision',
    description:
      'Computer vision Rubik’s Cube solver with real-time detection and optimal solving.',
    image: '/project_img/cubeVision.png',
    tags: ['python', 'OpenCV', 'NumPy', 'kociemba'],
    sourceCode: 'https://github.com/SUPAM07/cubeVision',
    demo: 'https://drive.google.com/file/d/1e1Jehq7A7n3eJeUhSfEsecYDBnvVKpFK/view',
    slug: 'cube-solver',
  },
];

