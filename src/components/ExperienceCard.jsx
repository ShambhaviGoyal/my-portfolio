import PropTypes from "prop-types";

const ExperienceCard = ({ title, company, duration, location, description }) => {
  return (
    <div className="relative pl-8 border-l-2 border-zinc-700 ml-3">
      <span className="absolute left-[-6px] top-2 w-3 h-3 bg-zinc-400 rounded-full"></span>
      <div className="ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group mb-6">
        <h3 className="text-base font-semibold text-zinc-300">{title}</h3>
        <p className="text-sm text-zinc-400">
          {company} 
        </p>
        <p className="text-sm text-zinc-500 italic">{duration}</p>
        {location && <p className="text-sm text-zinc-500">{location}</p>}
        {description && <p className="text-sm text-zinc-400 mt-2">{description}</p>}
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string,
};

export default ExperienceCard;
