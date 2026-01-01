import { useEffect, useRef, useState } from 'react';
import SocialLinks from '@components/SocialLinks';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { Button } from '@components/ui/button';

function ContactSection() {
  const currentYear = new Date().getFullYear();
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
    <section ref={sectionRef} id='contact' className="px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <div className={`flex items-center gap-4 mb-4 justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <div className="h-px bg-red w-24"></div>
        </div>
        <p className={`text-white/60 mb-12 text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Let's get in touch. I look forward to hearing from you.
        </p>
        
        <form
          action={`https://formsubmit.co/${import.meta.env.VITE_CONTACT_EMAIL || 'malik.heron2001@gmail.com'}`}
          method="post"
          className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-red transition-colors z-10">
                <i className="fa-solid fa-user"></i>
              </div>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="pl-12 border-l-4 border-white/10 focus:border-red transition-colors"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-red transition-colors z-10">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="pl-12 border-l-4 border-white/10 focus:border-red transition-colors"
              />
            </div>
          </div>
          
          <div className="relative group mb-6">
            <div className="absolute left-4 top-4 text-white/40 group-focus-within:text-red transition-colors z-10">
              <i className="fa-solid fa-message"></i>
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={8}
              required
              className="pl-12 border-l-4 border-white/10 focus:border-red transition-colors resize-none"
            />
          </div>
          
          <input name="_captcha" type="hidden" value="true" />
          <Button type="submit" className="w-full group">
            <i className="fa-solid fa-paper-plane mr-2"></i>
            Send Message
          </Button>
        </form>

        <div className={`text-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <SocialLinks />
        </div>

        <footer className={`mt-16 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} <span className="text-white/70 font-medium">Malik Heron</span>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;
