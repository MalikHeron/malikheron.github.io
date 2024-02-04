import '@styles/components/Navbar.scss';
import { useEffect } from 'react';

function Navbar() {

   useEffect(() => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav li');
      //let currentSection = '';

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
                  //currentSection = sectionId;

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
      }, 600);
   }

   return (
      <div className='Navbar' >
         <nav id='navbar' className="nav-container">
            <li id="homeTab" className='tab active' onClick={() => handleClick("home")}>HOME</li>
            <li id="aboutTab" className='tab' onClick={() => handleClick("about")}>ABOUT</li>
            <li id="experienceTab" className='tab' onClick={() => handleClick("experience")}>EXPERIENCE</li>
            <li id="projectsTab" className='tab' onClick={() => handleClick("projects")}>PROJECTS</li>
            <li id="contactTab" className='tab' onClick={() => handleClick("contact")}>CONTACT</li>
         </nav>
         <nav className="navbar fixed-top bg-body-tertiary">
            <div className="container-fluid">
               <a href="#home" className="navbar-brand align-text-center">
                  <img src="assets/logo_fire.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
               </a>
               <button className="navbar-toggler x" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className="offcanvas-header">
                     <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Malik Heron</h5>
                     <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                     <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className='nav-link' onClick={() => toggleNavbar("about")}>About</li>
                        <li className='nav-link' onClick={() => toggleNavbar("experience")}>Experience</li>
                        <li className='nav-link' onClick={() => toggleNavbar("projects")}>Projects</li>
                        <li className='nav-link' onClick={() => toggleNavbar("contact")}>Contact</li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </div >
   );
}

export default Navbar;