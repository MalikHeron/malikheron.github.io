import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "@firebase/firestore";
import '@styles/ProjectSection.scss';

interface Project {
   id: string;
   icon: string;
   title: string;
   description: string;
   tags: string[];
   link: string;
}

export function ProjectSection() {
   const [projects, setProjects] = useState<Project[]>([]);
   const db = getFirestore();
   const getProjects = async () => {
      const projectsRef = collection(db, 'projects');
      const snapshot = await getDocs(projectsRef);
      const projects = snapshot.docs.map(doc => doc.data() as Project);
      // Sort projects by title in alphabetical order
      projects.sort((a, b) => a.title.localeCompare(b.title));
      return projects;
   }


   useEffect(() => {
      const fetchProjects = async () => {
         const projects = await getProjects();
         setProjects(projects);
      }
      fetchProjects().then();
   }, []);

   return (
      <section id='projects' className='ProjectSection'>
         <h1>Projects</h1>
         <div className='project-list'>
            {projects.map((project, index) => (
               <div className='project-card' key={`${index}-${project.id}`}>
                  <img className='icon' src={`assets/${project.icon}`} alt={project.title} />
                  <div className='content'>
                     <div className='card-header'>
                        <a className='title' href={project.link} target='_blank'>{project.title}</a>
                        <span className='arrow'>
                           <i className="fa-solid fa-arrow-right"></i>
                        </span>
                     </div>
                     <p className='card-description'>{project.description}</p>
                     <ul className='card-tags'>
                        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default ProjectSection;