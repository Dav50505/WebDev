import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);
  const [contentRef, isContentVisible] = useScrollAnimation(0.3);

  return (
    <section className='gradient-bg py-20 relative overflow-hidden' id='about'>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className='align-element grid md:grid-cols-2 items-center gap-16 relative z-10'>
            <div className="relative">
                <img 
                  ref={imageRef}
                  src={aboutSvg} 
                  className={`w-full h-64 fade-in-left ${isImageVisible ? 'visible' : ''} relative z-10 rounded-2xl`} 
                />
            </div>
            <article 
              ref={contentRef}
              className={`fade-in-right ${isContentVisible ? 'visible' : ''} bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg`}
            >
                <SectionTitle text='Code and Coffee' />
                <p className='text-slate-700 mt-8 leading-loose text-lg'>
                    I am 20 years old and have been passionate about coding since 2018. 
                    Over the years, I have gained experience in multiple programming languages, including HTML5, CSS, JavaScript, TypeScript, and Python. 
                    My journey started with web development, where I learned to structure pages using HTML5, style them with CSS, and
                     add interactivity through JavaScript. I&apos;ve also worked extensively with modern frameworks like Next.js, which has helped me build 
                     robust and scalable web applications. As I expanded my skills, I also delved into Python, which allowed me to work on 
                    more complex projects involving automation, data analysis, and backend development. Coding has been a significant part 
                    of my life, helping me build creative and functional applications while continuously learning and improving my skills.
                </p>
            </article>
        </div>
    </section>
  )
}
export default About