import { FaHtml5, FaJs, FaReact, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiVercel, SiNetlify } from 'react-icons/si'
import { IconType } from 'react-icons'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  liveUrl: string
  githubUrl: string
  techStack: string[]
  featured: boolean
}

export interface Skill {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other'
  icon: IconType
  proficiency: number // 1-5
  yearsOfExperience?: number
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'CMS Project',
    description: 'A modern content management system built with React and Next.js',
    longDescription: 'A full-featured content management system that allows users to create, edit, and manage content with an intuitive interface. Built with modern web technologies for optimal performance and user experience.',
    image: 'https://miro.medium.com/v2/resize:fit:740/0*4HxmoUyeXbMQDOtu.png',
    liveUrl: 'https://davids-cms-project.netlify.app/',
    githubUrl: 'https://github.com/Dav50505',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'A responsive e-commerce solution with shopping cart and payment integration',
    longDescription: 'A fully functional e-commerce platform featuring product catalog, shopping cart, user authentication, and secure payment processing. Optimized for performance and conversion.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dav50505',
    techStack: ['React', 'Next.js', 'TypeScript', 'Stripe'],
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    longDescription: 'A productivity tool that helps teams organize and track tasks efficiently. Features include drag-and-drop interface, real-time collaboration, and advanced filtering options.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dav50505',
    techStack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing development projects',
    longDescription: 'A responsive portfolio website built with Next.js and TypeScript, featuring smooth animations, dark mode, and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    liveUrl: '#',
    githubUrl: 'https://github.com/Dav50505',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
  },
]

export const skills: Skill[] = [
  // Frontend
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    icon: FaReact,
    proficiency: 5,
    yearsOfExperience: 3,
  },
  {
    id: '2',
    name: 'Next.js',
    category: 'Frontend',
    icon: SiNextdotjs,
    proficiency: 5,
    yearsOfExperience: 2,
  },
  {
    id: '3',
    name: 'TypeScript',
    category: 'Frontend',
    icon: SiTypescript,
    proficiency: 4,
    yearsOfExperience: 2,
  },
  {
    id: '4',
    name: 'JavaScript',
    category: 'Frontend',
    icon: FaJs,
    proficiency: 5,
    yearsOfExperience: 4,
  },
  {
    id: '5',
    name: 'HTML & CSS',
    category: 'Frontend',
    icon: FaHtml5,
    proficiency: 5,
    yearsOfExperience: 5,
  },
  {
    id: '6',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: SiTailwindcss,
    proficiency: 5,
    yearsOfExperience: 2,
  },
  // Backend
  {
    id: '7',
    name: 'Python',
    category: 'Backend',
    icon: FaPython,
    proficiency: 3,
    yearsOfExperience: 2,
  },
  // Tools
  {
    id: '8',
    name: 'Git',
    category: 'Tools',
    icon: FaGitAlt,
    proficiency: 4,
    yearsOfExperience: 4,
  },
  {
    id: '9',
    name: 'Vercel',
    category: 'Tools',
    icon: SiVercel,
    proficiency: 4,
    yearsOfExperience: 2,
  },
  {
    id: '10',
    name: 'Netlify',
    category: 'Tools',
    icon: SiNetlify,
    proficiency: 4,
    yearsOfExperience: 2,
  },
]

export const skillCategories = ['Frontend', 'Backend', 'Tools', 'Other'] as const

// Fallback projects (used if Contentful is not configured)
export const fallbackProjects: Project[] = projects

// Function to get projects from Contentful or fallback to hardcoded data
export async function getProjects(): Promise<Project[]> {
  try {
    const { getAllProjects } = await import('./contentful')
    const contentfulProjects = await getAllProjects()
    
    // If Contentful returns projects, use them; otherwise fallback
    if (contentfulProjects.length > 0) {
      return contentfulProjects
    }
    
    console.warn('No projects from Contentful, using fallback data')
    return fallbackProjects
  } catch (error) {
    // If Contentful is not configured or fails, use fallback
    console.warn('Contentful not configured or failed, using fallback data:', error)
    return fallbackProjects
  }
}

