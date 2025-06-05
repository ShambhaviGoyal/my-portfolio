import { useRef, useEffect } from 'react';
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link',
      ref: lastActiveLink
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link'
    },
    {
      label: 'Education',
      link: '#education',
      className: 'nav-link'
    },
    {
      label: 'Projects',
      link: '#projects',
      className: 'nav-link'
    },
    {
      label: 'Experience',
      link: '#experience',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
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
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  return (
    <nav className={'navbar' + (navOpen ? ' active' : '')}>
      {
        navItems.map(({ label, link, className, ref }, key) => (
          <a href={link} key={key} className={className} ref={ref} onClick={activeCurrentLink}>
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
