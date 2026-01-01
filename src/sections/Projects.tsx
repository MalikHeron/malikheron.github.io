import { useEffect, useRef, useState } from 'react';
import { collection, getDocs, getFirestore } from "@firebase/firestore";

interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  ai: boolean;
}

export function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const db = getFirestore();
  
  const getProjects = async () => {
    const projectsRef = collection(db, 'projects');
    const snapshot = await getDocs(projectsRef);
    const projects = snapshot.docs.map(doc => doc.data() as Project);
    projects.sort((a, b) => a.title.localeCompare(b.title));
    return projects;
  }

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    }
    fetchProjects();
  }, []);

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
    <section ref={sectionRef} id='projects' className='px-6 py-24'>
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="h-px bg-red flex-1"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={`${index}-${project.id}`}
              className={`group border-l-4 border-white/10 hover:border-red transition-all duration-300 pl-6 py-4 rounded-r-lg hover:translate-x-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="flex items-start gap-4 mb-3">
                <img
                  className="w-10 h-10 rounded object-cover transition-transform duration-300 group-hover:scale-110"
                  src={project.icon}
                  alt={project.title}
                />
                <div className="flex-1">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group/link"
                    >
                      <h3 className="text-xl font-semibold text-white group-hover/link:text-red transition-colors duration-300">
                        {project.title}
                      </h3>
                      <i className="fa-solid fa-arrow-up-right-from-square text-white/40 group-hover/link:text-red group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300 text-xs"></i>
                    </a>
                  ) : (
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  )}
                </div>
              </div>

              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-white/60 text-xs">
                    {tag}
                  </span>
                ))}
                {project.ai && (
                  <span className="px-2 py-1 text-white/80 text-xs flex items-center gap-1">
                    <i className="bi bi-stars text-xs"></i>
                    <span>AI</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
