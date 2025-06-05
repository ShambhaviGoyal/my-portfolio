import PropTypes from "prop-types";

const EducationCard = ({ degree, institution, graduating, logo, course, GPA, colSpan = 1 }) => {
  // Only allow 1, 2, or 3 for colSpan
  const colSpanClass = colSpan === 3 ? "col-span-3" : colSpan === 2 ? "col-span-2" : "col-span-1";

  return (
    <div
      className={`flex gap-4 items-start ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-6 hover:bg-zinc-800 transition-colors group ${colSpanClass}`}
    >
      {course ? (
        <div className="text-sm text-zinc-300">{course}</div>
      ) : (
        <>
      <figure className="rounded-lg overflow-hidden w-28 h-28 p-4">
        <img
          src={logo}
          alt={`${institution} Logo`}
          className="w-20 h-20 object-contain"
        />
      </figure>
      <div>
        <h3 className="text-lg font-semibold text-zinc-300">{degree}</h3>
        <p className="text-base text-zinc-300">{institution}</p>
        <p className="text-base text-zinc-300">Graduation: {graduating}</p>
        <p className="text-base text-zinc-300">GPA: {GPA}</p> 
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
  GPA: PropTypes.string,
  colSpan: PropTypes.number,
};

export default EducationCard;