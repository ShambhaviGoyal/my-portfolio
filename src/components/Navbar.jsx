import { useRef, useEffect } from 'react';
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const isClickScrolling = useRef(false);

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link' },
    { label: 'Skills', link: '#skills', className: 'nav-link' },
    { label: 'Education', link: '#education', className: 'nav-link' },
    { label: 'Projects', link: '#projects', className: 'nav-link' },
    { label: 'Experience', link: '#experience', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;  // Ignore scroll updates during programmatic scroll

      let currentSection = null;
      navItems.forEach(({ link }) => {
        const section = document.querySelector(link);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 120) {
            currentSection = link;
          }
        }
      });

      if (currentSection) {
        const currentLink = document.querySelector(`a[href="${currentSection}"]`);
        if (currentLink && currentLink !== lastActiveLink.current) {
          lastActiveLink.current?.classList.remove('active');
          currentLink.classList.add('active');
          lastActiveLink.current = currentLink;

          if (activeBox.current) {
            activeBox.current.style.top = currentLink.offsetTop + 'px';
            activeBox.current.style.left = currentLink.offsetLeft + 'px';
            activeBox.current.style.width = currentLink.offsetWidth + 'px';
            activeBox.current.style.height = currentLink.offsetHeight + 'px';
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  useEffect(initActiveBox, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();

    const targetHref = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetHref);

    // Immediately update active link highlight
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    initActiveBox();

    // Start smooth scroll & disable scroll handler temporarily
    isClickScrolling.current = true;
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // After animation delay, re-enable scroll handler
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600); // Adjust 600ms based on scroll length/speed if needed
  };

  return (
    <nav className={'navbar' + (navOpen ? ' active' : '')}>
      {
        navItems.map(({ label, link, className }, key) => (
          <a href={link} key={key} className={className} onClick={activeCurrentLink}>
            {label}
          </a>
        ))
      }
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
