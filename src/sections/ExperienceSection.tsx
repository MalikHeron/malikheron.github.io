import '@styles/ExperienceSection.scss';

function ExperienceSection() {
   return (
      <section id='experience' className='ExperienceSection'>
         <h1>Experience</h1>
         <div className="content mt-2">
            {/* Skills */}
            <div className="row g-2">
               <div className="col">
                  <h5>Languages</h5>
                  <ul className='tags'>
                     <li>C++</li>
                     <li>CSS/Sass</li>
                     <li>HTML</li>
                     <li>Java</li>
                     <li>JavaScript</li>
                     <li>Kotlin</li>
                     <li>Prolog</li>
                     <li>Python</li>
                     <li>SQL</li>
                     <li>TypeScript</li>
                  </ul>
               </div>
               <div className="col">
                  <h5>Frameworks</h5>
                  <ul className='tags'>
                     <li>Bootstrap</li>
                     <li>Express</li>
                     <li>React</li>
                  </ul>
               </div>
               <div className="col">
                  <h5>Tools</h5>
                  <ul className='tags'>
                     <li>Android Studio</li>
                     <li>Git</li>
                     <li>IntelliJ IDEA</li>
                     <li>PyCharm</li>
                     <li>Visual Studio Code</li>
                     <li>WebStorm</li>
                  </ul>
               </div>
            </div>
         </div>
         <a className='resume' href="/assets/resume.pdf" target="_blank">View Resume</a>
      </section>
   );
}

export default ExperienceSection;