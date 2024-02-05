import '@styles/components/Navbar.scss';
import { useEffect } from 'react';

function Navbar() {

   useEffect(() => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav li');
      let currentSection = '';

      const options = {
         root: null,
         rootMargin: '0px',
         threshold: window.innerWidth <= 600 ? 0.7 : 0.5,
      };

      const observer = new IntersectionObserver(
         entries => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  const sectionId = entry.target.id;
                  currentSection = sectionId;

                  const currentHeader = document.querySelector(`.sectionHeader`);
                  if (currentHeader) {
                     if (currentSection === 'home') {
                        currentHeader.textContent = '';
                     } else {
                        currentHeader.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
                     }
                  }

                  navLinks.forEach(link => {
                     if (link.textContent && link.textContent.toLowerCase() === sectionId.toLowerCase()) {
                        if (!link.classList.contains('active')) {
                           link.classList.add('active');
                        }
                     } else {
                        link.classList.remove('active');
                     }
                  });
               }
            });
         },
         options
      );

      sections.forEach(section => observer.observe(section));
   }, []);

   const handleClick = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   }

   const toggleNavbar = (id: string) => {
      if (window.matchMedia("screen and (min-width: 600px)").matches)
         return
      const btn = document.getElementsByClassName('navbar-toggler')[0] as HTMLButtonElement
      btn.click()
      setTimeout(() => {
         handleClick(id)
      }, 400);
   }

   return (
      <div className='Navbar' >
         <nav id='navbar' className="nav-container">
            <li id="homeTab" className='tab active' onClick={() => handleClick("home")}>Home</li>
            <li id="aboutTab" className='tab' onClick={() => handleClick("about")}>About</li>
            <li id="experienceTab" className='tab' onClick={() => handleClick("experience")}>Experience</li>
            <li id="projectsTab" className='tab' onClick={() => handleClick("projects")}>Projects</li>
            <li id="contactTab" className='tab' onClick={() => handleClick("contact")}>Contact</li>
         </nav>
         <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid">
               <a className="navbar-brand" onClick={() => handleClick("home")}>
                  <img src="assets/logo_fire.png" alt="Logo" width="40" />
               </a>
               <h5 className='sectionHeader' />
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarToggler">
                  <ul className="navbar-nav">
                     <li className='nav-link' onClick={() => toggleNavbar("about")}>About</li>
                     <li className='nav-link' onClick={() => toggleNavbar("experience")}>Experience</li>
                     <li className='nav-link' onClick={() => toggleNavbar("projects")}>Projects</li>
                     <li className='nav-link' onClick={() => toggleNavbar("contact")}>Contact</li>
                  </ul>
               </div>
            </div>
         </nav>
      </div >
   );
}

export default Navbar;