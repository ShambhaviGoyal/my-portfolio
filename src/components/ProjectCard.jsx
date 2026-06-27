import PropTypes from "prop-types";

/**
 * Text-first project card. `imgSrc` is accepted but not rendered —
 * images stay in Projects.jsx for a possible future image/detail view.
 */
const ProjectCard = ({ title, desc, tags, githubLink, projectLink }) => {
  return (
    <article className="card group flex h-full flex-col rounded-xl p-3.5 transition-colors hover:border-theme-text/20 dark:hover:border-themeDark-text/25 sm:p-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-tight text-theme-text dark:text-themeDark-text sm:text-lg">
          {title}
        </h3>
        <div className="flex shrink-0 items-center gap-0.5">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code`}
              className="grid h-7 w-7 place-items-center rounded-full text-theme-muted transition-colors hover:bg-theme-text/[0.06] hover:text-theme-text dark:text-themeDark-muted dark:hover:bg-white/[0.08] dark:hover:text-themeDark-text"
            >
              <span className="material-symbols-rounded text-[17px]">code</span>
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="grid h-7 w-7 place-items-center rounded-full text-theme-muted transition-colors hover:bg-theme-text/[0.06] hover:text-theme-text dark:text-themeDark-muted dark:hover:bg-white/[0.08] dark:hover:text-themeDark-text"
            >
              <span className="material-symbols-rounded text-[17px]">arrow_outward</span>
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-[13.5px] leading-[1.65] text-theme-muted dark:text-themeDark-muted">
        {desc}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2.5">
        {tags.map((label) => (
          <span key={label} className="chip">
            {label}
          </span>
        ))}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
};

export default ProjectCard;
