import PropTypes from "prop-types";

const ExperienceCard = ({ title, company, duration, location, description, tags = [], index }) => {
  const borderColor = index % 2 === 0 ? "border-sky-500" : "border-zinc-600";
  const accentText = "text-sky-300";

  return (
    <div className={`relative pl-8 border-l-2 ${borderColor} ml-3`}>
      <span className="absolute left-[-6px] top-2 w-3 h-3 bg-sky-400 rounded-full"></span>
      <div className="ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-5 hover:bg-zinc-800 transition-colors duration-200 group mb-6">
        <h3 className={`text-lg lg:text-xl font-semibold ${accentText}`}>{title}</h3>
        <p className="text-base text-zinc-100">{company}</p>
        <p className="text-sm lg:text-base text-zinc-400 italic">{duration}</p>
        {location && <p className="text-sm lg:text-base text-zinc-400">{location}</p>}
        {description && (
          <p className="text-sm lg:text-base text-zinc-200 mt-3 leading-relaxed">
            {description}
          </p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-zinc-700 text-zinc-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
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
  tags: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number.isRequired,
};

export default ExperienceCard;
