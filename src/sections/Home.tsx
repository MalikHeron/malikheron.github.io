import { Button } from '@components/ui/button';

function HomeSection() {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center px-6 pt-16'>
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-white/40 text-sm mb-6 animate-fade-in-up">Hello, I'm</div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up animate-delay-100 opacity-0">
          <span className="text-white/70">Malik Heron</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-white/60 mb-8 animate-fade-in-up animate-delay-200 opacity-0">
          Software Developer
        </h2>
        <p className="text-lg text-white/50 mb-12 leading-relaxed max-w-xl mx-auto animate-fade-in-up animate-delay-300 opacity-0">
          Focused on developing modern applications with user-friendly interfaces.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up animate-delay-400 opacity-0">
          <Button asChild>
            <a href="#projects">View Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
