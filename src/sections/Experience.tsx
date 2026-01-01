import { useEffect, useRef, useState } from 'react';
import { Button } from '@components/ui/button';

function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const skills = {
    languages: ['CSS', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'Prolog', 'Python', 'SQL', 'TypeScript'],
    frameworks: ['Django', 'Express', 'NextJS', 'ReactJS'],
    tools: ['Firebase', 'Git', 'GitHub', 'NodeJS', 'TailwindCSS']
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id='experience' className='px-6 py-24'>
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center gap-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-bold text-white">Experience</h2>
          <div className="h-px bg-red flex-1"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-red rounded-full"></div>
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <div className="space-y-2">
              {skills.languages.map((lang, idx) => (
                <div
                  key={lang}
                  className="text-white/60 hover:text-white transition-all duration-300 cursor-default hover:translate-x-1"
                  style={{
                    animation: isVisible ? `fadeInUp 0.5s ease-out ${idx * 0.05}s both` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-red rounded-full"></div>
              <h3 className="text-xl font-semibold text-white">Frameworks</h3>
            </div>
            <div className="space-y-2">
              {skills.frameworks.map((framework, idx) => (
                <div
                  key={framework}
                  className="text-white/60 hover:text-white transition-all duration-300 cursor-default hover:translate-x-1"
                  style={{
                    animation: isVisible ? `fadeInUp 0.5s ease-out ${idx * 0.05}s both` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {framework}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-red rounded-full"></div>
              <h3 className="text-xl font-semibold text-white">Tools</h3>
            </div>
            <div className="space-y-2">
              {skills.tools.map((tool, idx) => (
                <div
                  key={tool}
                  className="text-white/60 hover:text-white transition-all duration-300 cursor-default hover:translate-x-1"
                  style={{
                    animation: isVisible ? `fadeInUp 0.5s ease-out ${idx * 0.05}s both` : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-8 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button
            variant="outline"
            asChild
            className="group"
          >
            <a
              href="https://bit.ly/3UBiee6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View Résumé
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
