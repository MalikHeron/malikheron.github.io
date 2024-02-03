import '@styles/ExperienceSection.scss';

function ExperienceSection() {
   return (
      <section id='experience' className='ExperienceSection'>
         <h1>Experience</h1>
         <div className="row g-1 content">
            <div className="row g-1">
               <h2 className='row'>Languages</h2>
               <p className='description'>
                  I am dedicated to expanding my proficiency in a diverse
                  range of programming languages within my areas of interest
                  in development. I have experience in:
               </p>
            </div>
            <ul className='tags'>
               <li>C</li>
               <li>C++</li>
               <li>CSS</li>
               <li>HTML</li>
               <li>Java</li>
               <li>Kotlin</li>
               <li>Python</li>
               <li>SQL</li>
               <li>XML</li>
            </ul>

            <div className="row g-1">
               <h2 className='row'>Focus</h2>
               <p className='description'>
                  I am currently focused on mobile and web development, while
                  continuously expanding my knowledge in UX and UI design. I
                  believe that having a strong understanding of user experience
                  and user interface design is crucial in creating successful and
                  user-friendly applications.
               </p>
            </div>
         </div>
         <a className='resume' href="/assets/resume.pdf" target="_blank">View Resume</a>
      </section>
   );
}

export default ExperienceSection;