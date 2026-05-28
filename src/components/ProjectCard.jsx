import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  desc,
  tags,
  githubLink,
  projectLink,
  classes,
  variant = "list",
}) => {
  const isList = variant === "list";
  const isDefault = variant === "default";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-900/[0.02] transition-[border-color,box-shadow] duration-300 hover:border-sky-300/70 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:ring-white/[0.04] dark:hover:border-sky-500/50 ${
        isList
          ? "flex flex-col sm:flex-row sm:items-stretch"
          : "flex h-full min-h-0 flex-col"
      }${classes ?? ""}`}
    >
      {/* Media */}
      <div
        className={
          isList
            ? "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-zinc-100 sm:aspect-auto sm:h-auto sm:min-h-[12rem] sm:w-64 sm:max-w-[40%] sm:border-r sm:border-zinc-200/90 lg:w-72 lg:max-w-[38%] dark:bg-zinc-800/80 dark:sm:border-zinc-700"
            : "relative aspect-[4/3] overflow-hidden bg-zinc-200 dark:bg-zinc-800"
        }
      >
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          className={`h-full w-full object-cover transition-[transform] duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100 ${
            isList ? "absolute inset-0 min-h-full" : ""
          }`}
        />
        {isDefault ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              aria-hidden
            />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4">
              <h3 className="type-overlay-title">{title}</h3>
            </div>
          </>
        ) : null}
      </div>

      {/* Body */}
      <div
        className={
          isList
            ? "flex min-w-0 flex-1 flex-col p-4 sm:p-5"
            : "flex min-h-0 flex-1 flex-col p-4"
        }
      >
        {isList ? (
          <>
            <h3 className="type-card-subline">{title}</h3>
            <p className="type-reading-muted mt-3">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="rounded-lg border border-zinc-200/90 bg-zinc-50 px-2.5 py-1 text-xs font-medium leading-snug text-zinc-700 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-zinc-200/90 pt-4 dark:border-zinc-700 sm:mt-auto sm:pt-5">
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-600 sm:text-sm"
                >
                  <span className="material-symbols-rounded text-[18px]">open_in_new</span>
                  Demo
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-zinc-100 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-700"
                >
                  <span className="material-symbols-rounded text-[18px]">code</span>
                  Code
                </a>
              )}
            </div>
          </>
        ) : (
          <>
            <p className="type-reading-muted mb-4">{desc}</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="type-chip-technical rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 dark:border-zinc-600 dark:bg-zinc-800"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-zinc-200/90 pt-4 dark:border-zinc-700">
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-sky-600 min-[380px]:flex-none sm:px-4 sm:text-sm"
                >
                  <span className="material-symbols-rounded text-[18px]">open_in_new</span>
                  Demo
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:bg-zinc-100 min-[380px]:flex-none sm:px-4 sm:text-sm dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-700"
                >
                  <span className="material-symbols-rounded text-[18px]">code</span>
                  Code
                </a>
              )}
            </div>
          </>
        )}
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
  classes: PropTypes.string,
  variant: PropTypes.oneOf(["default", "list"]),
};

export default ProjectCard;
