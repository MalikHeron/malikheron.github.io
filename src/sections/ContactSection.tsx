import '@styles/ContactSection.scss';
import SocialLinks from '@components/SocialLinks';

function ContactSection() {

   const currentYear = new Date().getFullYear();

   return (
      <section id='contact' className="ContactSection">
         <h1>Contact</h1>
         <h2>Let's Get In Touch</h2>
         <h3>I look forward to hearing from you.</h3>
         <form
            action="https://formsubmit.co/malik.heron2001@gmail.com"
            method="post"
         >
            {/* Full Name */}
            <div className="group">
               <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
               />
               {/* Email Address */}
               <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  required
               />
            </div>
            {/* Message */}
            <textarea
               className="form-control mb-3"
               name="message"
               id="message"
               placeholder="Write something..."
               rows={1}
               required>
            </textarea>
            <input name="_captcha" type="hidden" value="true" />
            <button className='submit' type="submit">Submit</button>
         </form>
         <SocialLinks />
         <footer><p>&copy; {currentYear} Malik Heron</p></footer>
      </section >
   );
}

export default ContactSection;