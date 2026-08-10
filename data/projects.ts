import { Project } from '@/types';

// Exporting projects vector
export const projects: Project[] = [
  {
    title: 'ThrottleX',
    description:
      'ThrottleX is a high-performance, enterprise-grade distributed rate limiting engine built with Node.js, TypeScript, and Redis.',
    image: '/project_img/ThrottleX.png',
    tags: ['Node.js', 'Redis', 'typescript', 'lua'],
    sourceCode: 'https://github.com/SUPAM07/ThrottleX',
    demo: 'https://throttlex-frontend1-vgpg.onrender.com/',
    slug: 'Throttlex',
  },
  {
    title: 'PrepSphere',
    description:
      'PrepSphere is an advanced, AI-powered career preparation platform designed to help tech candidates ace their interviews, build ATS-friendly resumes, and follow personalized learning roadmaps.',
    image: '/project_img/prepsphere.png',
    tags: ['react', 'Nodejs','PostgreSQL','MongoDB', 'Docker', 'typescript','AWS ECS'],
    sourceCode: 'https://github.com/SUPAM07/PrepSphere',
    demo: 'https://prep-sphere-smoky.vercel.app/',
    slug: 'PrepSphere',
  },
  {
    title: 'Synapse Social',
    description:
      'An enterprise-grade, event-driven SaaS for AI-powered social media scheduling, content ideation, and multi-channel publishing.',
    image: '/project_img/synapse_social.png',
    tags: ['NextJS','react', 'Tailwind CSS', 'Inngest', 'OAuth 2.0'],
    sourceCode: 'https://github.com/SUPAM07/Synapse-Social',
    demo: 'https://synapse-social.vercel.app/',
    slug: 'Synapse-Social',
  },

  {
    title: 'AIUS v1.0',
    description:
      'Attack & Intrusion Utility Suite: A cybersecurity research tool and live MITM engine for IEC 61850 substation automation systems, featuring a PyQt5-based passive PCAP editor and live MMS packet forging capabilities.',
    image: '/project_img/AUIS.png',
    tags: ['python', 'scapy', 'netfilterqueue', 'redis', 'PyQt5', 'cybersecurity'],
    sourceCode: 'https://github.com/SUPAM07/Attack-tool',
    slug: 'aius',
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
    title: 'cubeVision',
    description:
      'Real-time Rubik’s Cube solver using Computer Vision, achieving ~90% color detection accuracy and computing optimal solutions (≤20 moves) via the Kociemba two-phase algorithm.',
    image: '/project_img/cubeVision.png',
    tags: ['python', 'OpenCV', 'NumPy', 'kociemba'],
    sourceCode: 'https://github.com/SUPAM07/cubeVision',
    demo: 'https://drive.google.com/file/d/1e1Jehq7A7n3eJeUhSfEsecYDBnvVKpFK/view',
    slug: 'cube-solver',
  },
];

