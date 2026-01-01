import { useEffect, useRef, useState } from 'react';

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id='about' className='px-6 py-24'>
      <div className="max-w-4xl mx-auto">
        <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-bold text-white">About</h2>
          <div className="h-px bg-red flex-1"></div>
        </div>
        <div className={`space-y-6 text-white/60 leading-relaxed text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p>
            As a software developer, I am driven by the thrill of solving complex problems.
            My expertise lies in crafting efficient code and designing modern,
            visually engaging user interfaces.
          </p>
          <p>
            I am proficient in multiple languages and tools, and I am always on the lookout
            for smarter and more efficient ways to work. My primary focus is on mobile and
            web development, with a keen interest in expanding my knowledge in UX and UI design.
          </p>
          <p>
            I firmly believe that understanding user experience and interface design is key to
            developing successful, user-centric applications. My goal is to create digital solutions
            that not only meet but exceed user expectations and client requirements. I am committed to
            continuous learning and growth in this ever-evolving field.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
