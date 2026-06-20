const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-4xl font-bold tracking-tight text-navy dark:text-zinc-50">
          Contact Me
        </h2>
        <p className="mt-3 max-w-md text-lg text-muted dark:text-zinc-400">
          Have an opportunity, a question, or just want to say hi?
          I&apos;d love to hear from you.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-muted/70 dark:text-zinc-500">Email</span>
              <a
                href="mailto:shambhavigoyal88@gmail.com"
                className="mt-2 block text-xl font-bold text-navy underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent dark:text-zinc-100 dark:decoration-accent-light/40 dark:hover:decoration-accent-light"
              >
                shambhavigoyal88@gmail.com
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a href="https://github.com/ShambhaviGoyal" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-navy/60 underline decoration-navy/15 underline-offset-4 hover:text-navy dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200">GitHub</a>
              <a href="https://www.linkedin.com/in/shambhavigoyal/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-navy/60 underline decoration-navy/15 underline-offset-4 hover:text-navy dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200">LinkedIn</a>
              <a href="https://www.instagram.com/shambhavigoyal/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-navy/60 underline decoration-navy/15 underline-offset-4 hover:text-navy dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-200">Instagram</a>
            </div>
          </div>

          <form action="https://getform.io/f/aolmdlqb" method="POST" className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <input type="text" name="name" id="name" autoComplete="name" required placeholder="Your name" className="text-field" />
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" required placeholder="you@example.com" className="text-field" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="label">Message</label>
              <textarea name="message" id="message" placeholder="Your message..." required className="text-field min-h-32 resize-y" />
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
