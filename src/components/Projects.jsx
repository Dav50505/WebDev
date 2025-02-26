import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects' >
        <SectionTitle text='Web Creations'/>
        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {
                projects.map((projects)=> {
                    return <ProjectsCard key={projects.id} {...projects} />
                })
            }
        </div>
    </section>
  )
}
export default Projects