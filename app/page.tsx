import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import { getProjects } from '@/lib/data'

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects projects={projects} />
      <Skills />
      <About />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

