import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-sky-400 py-24' >
        <div className='align-element grid md:grid-cols-2 items-center gap-8 '>
            <article>
                <h1 className='text-7xl font-bold tracking-wider'>
                    My name is David,
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        and I am a Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                        Turning ideas into reality
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href="https://github.com/Dav50505">
                            <FaGithubSquare className='h-8 w-8 bg-sky-400 hover:text-black duration-300 text-black'/>
                        </a>
                        <a href="https://www.linkedin.com/in/david-ginzburg-a453ba295/">
                            <FaLinkedin className='h-8 w-8 bg-sky-400 hover:text-black duration-300 text-black'/>
                        </a>
                        <a href="https://www.instagram.com/dginzburg_2005/?hl=en">
                            <FaInstagramSquare className='h-8 w-8 bg-sky-400 hover:text-black duration-300 text-black'/>
                        </a>
                    </div>
                </h1>
            </article>
            <article className='hidden md:block' >
                <img src={heroImg} className='h-80 lg:h-96' />
            </article>
        </div>
    </div>
  )
}
export default Hero