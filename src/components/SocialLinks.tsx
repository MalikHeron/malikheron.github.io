import '@styles/components/SocialLinks.scss';

function SocialLinks() {
   return (
      <div className='SocialLinks'>
         <a href="https://twitter.com/MalikDHeron" target="_blank">
            <i className="fa-brands fa-x-twitter"></i>
         </a>
         <a href="https://github.com/MalikHeron" target="_blank"><i
            className="fa-brands fa-github"></i>
         </a>
         <a href="https://www.linkedin.com/in/malikheron/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
         </a>
         <a href="mailto:malik.heron2001@gmail.com" target="_blank"><i
            className="fa-solid fa-envelope"></i>
         </a>
      </div >
   );
}

export default SocialLinks;