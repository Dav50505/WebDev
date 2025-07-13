import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import PropTypes from 'prop-types';

const ProjectsCard = ({url, img, github, title, text}) => {
  return (
    <article className='bg-white/90 backdrop-blur-sm card-hover rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 group shadow-lg'>
        <div className="relative overflow-hidden">
            <img src={img} alt={title} className='w-full object-cover h-64 transition-transform duration-500 group-hover:scale-110'  />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className='capitalize p-8' >
            <h2 className='text-xl tracking-wide font-medium text-slate-800' >{title}</h2>
            <p className='mt-4 text-slate-600 leading-loose' >{text}</p>
            <div className='mt-6 flex gap-x-4' >
                <a href={url} className="card-hover p-2 rounded-lg">
                    <TbWorldWww className='h-8 w-8 text-slate-700 hover:text-blue-600 duration-300 transition-all transform hover:scale-110' />
                </a>
                <a href={github} className="card-hover p-2 rounded-lg">
                    <FaGithubSquare className='h-8 w-8 text-slate-700 hover:text-gray-800 duration-300 transition-all transform hover:scale-110' />
                </a>
            </div>
        </div>
    </article>
  )
}

ProjectsCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ProjectsCard