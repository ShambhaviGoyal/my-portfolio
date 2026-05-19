import PropTypes from "prop-types";

const ExperienceCard = ({
  title,
  company,
  duration,
  location,
  description,
  variant = "panel",
}) => {
  const embedded = variant === "embedded";
  return (
    <article
      className={
        embedded
          ? "group relative bg-transparent"
          : "group relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-600"
      }
    >
      <div className={embedded ? "relative py-1 sm:py-0" : "relative p-5 sm:p-6"}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1 space-y-1">
            <h4 className="type-card-subline">{title}</h4>
            <p className="type-reading-muted font-semibold">{company}</p>
          </div>

          <p className="type-support shrink-0 rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-2 text-center font-medium leading-tight text-zinc-700 sm:text-left dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
            {duration}
          </p>
        </div>

        {location && (
          <p className="type-overline mt-3 flex items-center gap-1.5 normal-case tracking-normal text-zinc-500">
            <span className="material-symbols-rounded text-[18px] text-zinc-400 dark:text-zinc-500">
              location_on
            </span>
            {location}
          </p>
        )}

        {description && (
          <p className="type-reading-muted mt-4">{description}</p>
        )}
      </div>
    </article>
  );
};

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(["panel", "embedded"]),
};

export default ExperienceCard;
