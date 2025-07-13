import PropTypes from 'prop-types';

const SkillsCard = ({icon,title, text}) => {
  return (
    <article className="bg-white/90 backdrop-blur-sm card-hover p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 group shadow-lg">
      <div className="text-4xl text-slate-700 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="mt-6 font-bold text-slate-800 text-xl" >
        {title}
      </h4>
      <p className="mt-2 text-slate-600 leading-relaxed" >{text}</p>
      <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </article>
  )
}

SkillsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillsCard