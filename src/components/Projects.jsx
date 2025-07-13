import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.3);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.2);

  return (
    <section className='gradient-bg-alt py-20 relative overflow-hidden' id='projects' >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="align-element relative z-10">
          <div 
            ref={titleRef}
            className={`fade-in-up ${isTitleVisible ? 'visible' : ''} relative z-10`}
          >
              <SectionTitle text='Web Creations'/>
          </div>
          <div 
            ref={cardsRef}
            className={`py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 fade-in ${isCardsVisible ? 'visible' : ''} relative z-10`}
          >
              {
                  projects.map((projects)=> {
                      return <ProjectsCard key={projects.id} {...projects} />
                  })
              }
          </div>
        </div>
    </section>
  )
}
export default Projects