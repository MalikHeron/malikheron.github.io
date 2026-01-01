function SocialLinks() {
   const socialLinks = [
      { href: "https://twitter.com/MalikDHeron", icon: "fa-brands fa-x-twitter", label: "Twitter" },
      { href: "https://github.com/MalikHeron", icon: "fa-brands fa-github", label: "GitHub" },
      { href: "https://www.linkedin.com/in/malikheron/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
      { href: "mailto:malik.heron2001@gmail.com", icon: "fa-solid fa-envelope", label: "Email" },
   ];

   return (
      <div className="flex items-center justify-center gap-6">
         {socialLinks.map((link) => (
            <a
               key={link.label}
               href={link.href}
               target="_blank"
               rel="noopener noreferrer"
               className="text-white/60 hover:text-red transition-all duration-300 hover:scale-110 hover:-translate-y-1"
               aria-label={link.label}
            >
               <i className={`${link.icon} text-2xl`}></i>
            </a>
         ))}
      </div>
   );
}

export default SocialLinks;
