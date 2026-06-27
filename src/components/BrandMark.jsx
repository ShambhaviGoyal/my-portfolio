import PropTypes from "prop-types";

const SIZE_CLASS = {
  sm: "h-8 w-8 text-[13px]",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base",
};

/**
 * Clean monogram mark — solid ink badge, no gradients.
 */
const BrandMark = ({ size = "lg", className = "" }) => (
  <span
    aria-hidden
    className={`inline-flex shrink-0 select-none items-center justify-center rounded-xl bg-theme-text font-display font-semibold tracking-tight text-theme-bg dark:bg-themeDark-text dark:text-themeDark-bg ${SIZE_CLASS[size] ?? SIZE_CLASS.lg} ${className}`}
  >
    SG
  </span>
);

BrandMark.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default BrandMark;
