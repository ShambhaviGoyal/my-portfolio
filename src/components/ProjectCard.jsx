import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, desc, tags, githubLink, projectLink }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface dark:bg-zinc-800">
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy dark:text-zinc-50">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted dark:text-zinc-400">
          {desc}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((label) => (
            <span
              key={label}
              className="rounded bg-surface px-2 py-0.5 text-xs font-medium text-navy/70 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 border-t border-navy/8 pt-4 dark:border-zinc-800">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy/60 transition-colors hover:text-navy dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Code &rarr;
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-light dark:text-accent-light dark:hover:text-accent"
            >
              Demo &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
};

export default ProjectCard;
