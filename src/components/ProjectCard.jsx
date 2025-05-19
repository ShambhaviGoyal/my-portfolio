import PropTypes from 'prop-types';

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  githubLink,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <h3 className="title-1 mb-3">{title}</h3>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {tags.map((label, key) => (
          <span
            key={key}
            className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto z-20 relative">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-sky-400 text-zinc-950 text-sm font-medium hover:bg-sky-300 transition"
          >
            Live Demo
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-600 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
