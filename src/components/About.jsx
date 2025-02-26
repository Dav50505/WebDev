import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64' />
            <article>
                <SectionTitle text='Code and Coffee' />
                <p className='text-slate-600 mt-8 leading-loose'>
                    I am 19 years old and have been passionate about coding since 2018. 
                    Over the years, I have gained experience in multiple programming languages, including HTML5, CSS, JavaScript, and Python. 
                    My journey started with web development, where I learned to structure pages using HTML5, style them with CSS, and
                     add interactivity through JavaScript. As I expanded my skills, I also delved into Python, which allowed me to work on 
                    more complex projects involving automation, data analysis, and backend development. Coding has been a significant part 
                    of my life, helping me build creative and functional applications while continuously learning and improving my skills.
                </p>
            </article>
        </div>
    </section>
  )
}
export default About