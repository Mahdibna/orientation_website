import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyle.css';
const Navbar = ({ activeLink, setActiveLink }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const location = useLocation();
  useEffect(() => {
    document.querySelector(".navbar p").addEventListener('click',()=>{ window.scrollTo({
      top: 0,
      behavior: "smooth" 
  });setScrollPercentage(0)})
    const updateScrollPercentage = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };
    window.addEventListener('scroll', updateScrollPercentage);
    window.addEventListener('resize', updateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
      window.removeEventListener('resize', updateScrollPercentage);
  };
  }, []);
  useEffect(() => {
    const checkbox = document.getElementById('checkbox');
    const ulel = document.querySelector('ul');
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        ulel.classList.add('active');
      } else {
        ulel.classList.remove('active');
      }
    });

    return () => {
      checkbox.removeEventListener('click', () => {});
    };
  }, []);

  const spanStyle = {
    width: `${scrollPercentage}%`,
    backgroundColor: '#068DA9',
  };

  useEffect(() => {
    setActiveLink(location.pathname.includes('/wajahni/calcScoreForm') ? '/wajahni' : location.pathname);
    console.log(location.pathname);
    let check = document.querySelector('input[type="checkbox"]');
    check.checked=false;
    const ulel = document.querySelector('ul');
    ulel.classList.remove('active');
    setScrollPercentage(0);
  }, [location.pathname, setActiveLink]);
  return (
    <div className="navbar">
      <p>
        <span>T</span>awjihi
      </p>
      <div className="menu">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
      <ul>
        <li>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/wajahni"
            className={activeLink === '/wajahni' ? 'active' : ''}
          >
            Wajahni
          </Link>
        </li>
        <li>
          <Link
            to="/faculte"
            className={activeLink === '/faculte' ? 'active' : ''}
          >
            Faculté
          </Link>
        </li>
      </ul>
      <span style={spanStyle}></span>
    </div>
  );
};

export default Navbar;
