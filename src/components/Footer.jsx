import BrandMark from "./BrandMark";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200/90 bg-white/90 py-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="container-wide flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <a
          href="#home"
          className="flex items-center gap-3 opacity-90 transition-opacity hover:opacity-100"
        >
          <BrandMark size="md" />
          <span className="type-brand-footer-name">
            Shambhavi Goyal
          </span>
        </a>
        <p className="type-support text-zinc-500">
          &copy; {new Date().getFullYear()} · Buffalo, NY · Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
