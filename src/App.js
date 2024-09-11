import React from 'react';
import Header from './pages/Header ';
import FeaturedBox from './pages/FeaturedBox ';
import About from './pages/About ';
import Projects from './pages/Projects ';
import Contact from './pages/Contact ';
import Footer from './pages/Footer ';
import './styles.css';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

function App() {
  React.useEffect(() => {
    // Initialize Typed.js
    new Typed(".typedText", {
      // strings: ["UI Developer", "Front End Developer", "back End Developer"],
      strings: ["Full Stack Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
    });

    // Initialize ScrollReveal.js
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.top-header', {});

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srLeft.reveal('.about-info', { delay: 100 });
    srLeft.reveal('.contact-info', { delay: 100 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    srRight.reveal('.skills-box', { delay: 100 });
    srRight.reveal('.form-control', { delay: 100 });

    // Handle scroll events
    const handleScroll = () => {
      const navHeader = document.getElementById("header");
      if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }

      // Handle active link
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
          document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="wrapper">
        <FeaturedBox />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
