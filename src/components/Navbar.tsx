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

   const toggleNavbar = () => {
      if (window.matchMedia("screen and (min-width: 600px)").matches)
         return
      const btn = document.getElementsByClassName('navbar-toggler')[0] as HTMLButtonElement
      btn.click()
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
         <nav className="navbar">
            <div className="container-fluid">
               <a href="#home" className="navbar-brand">
                  <img src="assets/logo_fire.png" alt="Logo" width="40" height="40" />
               </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarToggler">
                  <ul className="navbar-nav">
                     <li className='nav-item' onClick={() => toggleNavbar()}>
                        <a href='#about' className='nav-link'>About</a>
                     </li>
                     <li className='nav-item' onClick={() => toggleNavbar()}>
                        <a href='#experience' className='nav-link'>Experience</a>
                     </li>
                     <li className='nav-item' onClick={() => toggleNavbar()}>
                        <a href='#projects' className='nav-link'>Projects</a>
                     </li>
                     <li className='nav-item' onClick={() => toggleNavbar()}>
                        <a href='#contact' className='nav-link'>Contact</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div >
   );
}

export default Navbar;