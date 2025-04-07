import PropTypes from "prop-types"

const EducationCard = ({ degree, institution, graduating, logo, course }) => {
    return (
      <div className="flex gap-4 items-start ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-4 hover:bg-zinc-800 transition-colors group">
        {course ? (
          <div className="text-sm text-zinc-300">{course}</div>
        ) : (
          <>
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
              <img
                src={logo}
                alt={`${institution} Logo`}
                className="w-8 h-8 object-contain"
              />
            </figure>
            <div>
              <h3 className="text-base font-semibold text-zinc-300">{degree}</h3>
              <p className="text-sm text-zinc-400">{institution}</p>
              <p className="text-sm text-zinc-500">{graduating}</p>
            </div>
          </>
        )}
      </div>
    );
  };
  

    EducationCard.propTypes = {
        degree: PropTypes.string,
        institution: PropTypes.string,
        graduating: PropTypes.string,
        logo: PropTypes.string,
        course: PropTypes.string,
        };

  export default EducationCard;

