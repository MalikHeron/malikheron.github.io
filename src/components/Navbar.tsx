import '@styles/components/Navbar.scss';
import SocialLinks from './SocialLinks';
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

   return (
      <div className='Navbar' >
         <nav id='navbar' className="nav-container">
            <li id="homeTab" className='tab active' onClick={() => handleClick("home")}>HOME</li>
            <li id="aboutTab" className='tab' onClick={() => handleClick("about")}>ABOUT</li>
            <li id="experienceTab" className='tab' onClick={() => handleClick("experience")}>EXPERIENCE</li>
            <li id="projectsTab" className='tab' onClick={() => handleClick("projects")}>PROJECTS</li>
            <li id="contactTab" className='tab' onClick={() => handleClick("contact")}>CONTACT</li>
         </nav>
      </div >
   );
}

export default Navbar;