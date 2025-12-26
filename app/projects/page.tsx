import ProjectsGrid from '@/components/ProjectsGrid'
import Navbar from '@/components/Navbar'
import { getProjects } from '@/lib/data'

export const metadata = {
  title: 'Projects | David Ginzburg',
  description: 'Explore my portfolio of web development projects built with React, Next.js, and TypeScript.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsGrid projects={projects} />
    </main>
  )
}

