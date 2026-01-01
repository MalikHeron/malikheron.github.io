import { useEffect, useState } from 'react';

function Navbar() {
   const [activeSection, setActiveSection] = useState('home');
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const sections = document.querySelectorAll('section');
      const options = {
         root: null,
         rootMargin: '-20% 0px -70% 0px',
         threshold: 0,
      };

      const observer = new IntersectionObserver(
         entries => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
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
      setIsMobileMenuOpen(false);
   }

   const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
   ];

   return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/[0.03]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
               <button
                  onClick={() => handleClick("home")}
                  className="flex items-center gap-3 group"
               >
                  <div className="relative">
                     <div className="absolute inset-0 bg-red/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <img 
                        src="logo.png" 
                        alt="Logo" 
                        className="relative h-9 w-9 rounded-lg border border-white/10 group-hover:border-red/50 transition-all duration-300 group-hover:scale-105" 
                     />
                  </div>
                  <span className="text-base font-medium text-white/50 group-hover:text-white/70 transition-colors duration-300 hidden sm:block">
                     Malik Heron
                  </span>
               </button>

               <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => (
                     <button
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                           activeSection === item.id
                              ? 'text-red'
                              : 'text-white/50 hover:text-white/80'
                        }`}
                     >
                        {item.label}
                        {activeSection === item.id && (
                           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red rounded-full"></div>
                        )}
                     </button>
                  ))}
               </div>

               <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-white/50 hover:text-red transition-colors rounded-md"
                  aria-label="Toggle menu"
               >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                     )}
                  </svg>
               </button>
            </div>

            {isMobileMenuOpen && (
               <div className="md:hidden pb-4 border-t border-white/[0.03]">
                  <div className="flex flex-col gap-1 pt-2">
                     {navItems.map((item) => (
                        <button
                           key={item.id}
                           onClick={() => handleClick(item.id)}
                           className={`px-4 py-2 text-left text-sm font-medium transition-colors rounded-md ${
                              activeSection === item.id
                                 ? 'text-red bg-red/10'
                                 : 'text-white/50 hover:text-red hover:bg-white/5'
                           }`}
                        >
                           {item.label}
                        </button>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
}

export default Navbar;
