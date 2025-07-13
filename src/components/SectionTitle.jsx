import PropTypes from 'prop-types';

const SectionTitle = ({text}) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h2 className="text-4xl font-bold tracking-wider capitalize text-slate-800" >{text}</h2>
    </div>
  )
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SectionTitle