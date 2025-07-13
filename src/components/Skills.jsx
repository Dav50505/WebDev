import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import { skills } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.3);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.2);

  return (
    <section className="gradient-bg py-20 relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="align-element relative z-10">
        <div 
          ref={titleRef}
          className={`fade-in-up ${isTitleVisible ? 'visible' : ''} relative z-10`}
        >
          <SectionTitle text='Tech Stack' />
        </div>
        <div 
          ref={cardsRef}
          className={`py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 fade-in ${isCardsVisible ? 'visible' : ''} relative z-10`}
        >
          {skills.map((skill)=>{
            return <SkillsCard key={skill.id} {...skill} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Skills