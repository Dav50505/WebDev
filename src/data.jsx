import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Typescript',
    icon: <SiTypescript className='h-16 w-16 text-emerald-500' />,
    text: 'Strong expertise in TypeScript, leveraging static typing and advanced features to build robust, maintainable applications with enhanced code quality and developer experience.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <RiNextjsFill className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Next.js, building performant full-stack applications with server-side rendering, static site generation, and modern React features for optimal user experience and SEO.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://miro.medium.com/v2/resize:fit:740/0*4HxmoUyeXbMQDOtu.png',
    url: 'https://davids-cms-project.netlify.app/',
    github: 'https://github.com/Dav50505',
    title: 'Projects',
    text: 'Here are all the project that I have completed so far. Click on the github icon to view the code.',
  },
  
];
