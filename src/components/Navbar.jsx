import { links } from "../data"
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Navbar = () => {
  const [navRef, isNavVisible] = useScrollAnimation(0.1);

  return (
    <nav className="bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div 
          ref={navRef}
          className={`align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-6 fade-in-up ${isNavVisible ? 'visible' : ''}`}
        >
            <h2 className="text-3xl font-bold text-slate-800">
                Web<span className="text-blue-600">Dev</span>
            </h2>
            <div className="flex gap-x-6" >
                {links.map((link) => {
                    const {id,href,text} = link
                    return (
                        <a 
                          key={id} 
                          href={href} 
                          className="capitalize text-lg tracking-wide text-slate-700 hover:text-slate-900 duration-300 transition-all transform hover:scale-105 relative group"
                        >
                            {text}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    )
                })}
            </div>
        </div>
    </nav>
  )
}
export default Navbar