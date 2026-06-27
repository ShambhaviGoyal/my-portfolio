const certifications = [
  {
    title: "Intro to Cybersecurity",
    issuer: "CodePath",
    issued: "Dec 2025",
    pdf: "/certificates/codepath-cybersecurity.pdf",
    thumbnail: "/certificates/codepath-cybersecurity.png",
  },
  {
    title: "Advanced Technical Interview Prep",
    issuer: "CodePath",
    issued: "Aug 2025",
    pdf: "/certificates/codepath-tip.pdf",
    thumbnail: "/certificates/codepath-tip.png",
  },
  {
    title: "Android Development",
    issuer: "CodePath",
    issued: "Aug 2025",
    pdf: "/certificates/codepath-android-development.pdf",
    thumbnail: "/certificates/codepath-android-development.png",
  },
];

function CertificateCard({ cert }) {
  return (
    <a
      href={cert.pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[2/1] overflow-hidden border-b border-theme-border bg-theme-bg dark:border-themeDark-border dark:bg-themeDark-bg">
        <img
          src={cert.thumbnail}
          alt=""
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight text-theme-text dark:text-themeDark-text sm:text-base">
            {cert.title}
          </h3>
          <span className="material-symbols-rounded shrink-0 text-[18px] text-theme-muted transition-colors group-hover:text-theme-accent dark:text-themeDark-muted dark:group-hover:text-themeDark-accent">
            arrow_outward
          </span>
        </div>

        <p className="mt-1 text-sm text-theme-muted dark:text-themeDark-muted">
          {cert.issuer}
        </p>

        <p className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-wider text-theme-muted dark:text-themeDark-muted">
          {cert.issued}
        </p>
      </div>
    </a>
  );
}

const Certifications = () => {
  return (
    <section id="certifications" className="section section--tight-bottom">
      <div className="container-wide">
        <header className="section-header">
          <p className="eyebrow reveal-up mb-2">Certifications</p>
          <h2 className="heading reveal-up">Beyond coursework.</h2>
        </header>

        <div className="grid gap-3 reveal-up sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
