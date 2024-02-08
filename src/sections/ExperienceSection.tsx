import '@styles/ExperienceSection.scss';

function ExperienceSection() {
   return (
      <section id='experience' className='ExperienceSection'>
         <h1>Experience</h1>
         <div className="content mt-2">
            {/* Skills */}
            <div className="row">
               <div className="col">
                  <h2>Languages</h2>
                  <ul className='tags'>
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
                  <h2>Frameworks</h2>
                  <ul className='tags'>
                     <li>Bootstrap</li>
                     <li>Express</li>
                     <li>ReactJS</li>
                  </ul>
               </div>
               <div className="col">
                  <h2>Tools</h2>
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
         <a className='resume' href="https://bit.ly/3UBiee6" target="_blank">
            View Résumé
            <span className='arrow'>
               <i className="fa-solid fa-arrow-right"></i>
            </span>
         </a>
      </section>
   );
}

export default ExperienceSection;