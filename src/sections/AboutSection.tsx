import '@styles/AboutSection.scss';

function AboutSection() {
   return (
      <section id='about' className='AboutSection' data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
         <h1>About Me</h1>
         <p className='description'>
            As a passionate problem-solver, I thrive on the challenge of
            crafting efficient and functional code. My goal is to create a
            seamless user experience through modern and visually
            appealing UI design. I believe that it is the little details that keep
            users coming back to apps and websites time and time again.
            <br /><br />
            With experience in a variety of languages and tools, I am always
            looking for new ways to work smarter and more efficiently. While
            my focus is currently on a few key areas, I am excited to continue
            expanding my skills and knowledge in the future.
         </p>
      </section>
   )
}

export default AboutSection;