const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container text-center">
        <p className="text-sm text-muted dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Shambhavi Goyal &middot; Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
