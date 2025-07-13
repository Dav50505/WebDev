import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [textRef, isTextVisible] = useScrollAnimation(0.3);
  const [imageRef, isImageVisible] = useScrollAnimation(0.3);

  return (
    <div className='gradient-bg-hero particles py-24 relative overflow-hidden' >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full float"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white rounded-full float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className='align-element grid md:grid-cols-2 items-center gap-8 relative z-10'>
            <article 
              ref={textRef}
              className={`fade-in-left ${isTextVisible ? 'visible' : ''}`}
            >
                <h1 className='text-7xl font-bold tracking-wider text-slate-800'>
                    My name is David,
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        and I am a Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-600 capitalize tracking-wide'>
                        Turning ideas into reality
                    </p>
                    <div className='flex gap-x-4 mt-8'>
                        <a href="https://github.com/Dav50505" className="card-hover p-2 rounded-lg">
                            <FaGithubSquare className='h-10 w-10 text-slate-700 hover:text-black duration-300 transition-all transform hover:scale-110'/>
                        </a>
                        <a href="https://www.linkedin.com/in/david-ginzburg-a453ba295/" className="card-hover p-2 rounded-lg">
                            <FaLinkedin className='h-10 w-10 text-slate-700 hover:text-black duration-300 transition-all transform hover:scale-110'/>
                        </a>
                        <a href="https://www.instagram.com/dginzburg_2005/?hl=en" className="card-hover p-2 rounded-lg">
                            <FaInstagramSquare className='h-10 w-10 text-slate-700 hover:text-black duration-300 transition-all transform hover:scale-110'/>
                        </a>
                    </div>
                </h1>
            </article>
            <article 
              ref={imageRef}
              className={`hidden md:block fade-in-right ${isImageVisible ? 'visible' : ''}`}
            >
                <div className="relative">
                    <img src={heroImg} className='h-80 lg:h-96 relative z-10 float' />
                </div>
            </article>
        </div>
    </div>
  )
}
export default Hero