import PropTypes from "prop-types";

const SIZE_CLASS = {
  sm: "h-8 w-8 rounded-[10px] text-[11px]",
  md: "h-9 w-9 rounded-xl text-[12px]",
  lg: "h-11 w-11 rounded-xl text-[13px] sm:text-[14px]",
};

/**
 * “SG” monogram for sidebar, mobile header, and footer links.
 */
const BrandMark = ({ size = "lg", className = "" }) => (
  <span
    aria-hidden
    className={`inline-flex shrink-0 select-none items-center justify-center bg-gradient-to-br from-sky-500 via-sky-600 to-violet-600 font-display font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_4px_14px_-6px_rgba(37,99,235,0.55)] ring-1 ring-white/20 ${SIZE_CLASS[size] ?? SIZE_CLASS.lg} ${className}`}
  >
    SG
  </span>
);

BrandMark.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

export default BrandMark;
