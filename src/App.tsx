import ContactSection from '@sections/ContactSection';
import ProjectSection from '@sections/ProjectSection';
import ExperienceSection from '@sections/ExperienceSection';
import AboutSection from '@sections/AboutSection';
import HomeSection from '@sections/HomeSection';

export function App() {
   return (
      <>
         <HomeSection />
         <AboutSection />
         <ExperienceSection />
         <ProjectSection />
         <ContactSection />
         <footer><p>&copy; 2023 Malik Heron</p></footer>
      </>
   );
};