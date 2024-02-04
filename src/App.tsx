import ContactSection from '@sections/ContactSection';
import ProjectSection from '@sections/ProjectSection';
import ExperienceSection from '@sections/ExperienceSection';
import AboutSection from '@sections/AboutSection';
import HomeSection from '@sections/HomeSection';

export function App() {
   const currentYear = new Date().getFullYear();

   return (
      <>
         <HomeSection />
         <AboutSection />
         <ExperienceSection />
         <ProjectSection />
         <ContactSection />
         <footer><p>&copy; {currentYear} Malik Heron</p></footer>
      </>
   );
};