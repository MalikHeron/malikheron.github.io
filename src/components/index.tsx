import React, {useEffect} from 'react';
import type {FC} from 'react';
import {Projects} from './projects';

import navigate from './stylesheets/navigation.module.css';
import home from './stylesheets/home.module.css';
import experience from './stylesheets/experience.module.css';
import projects from './stylesheets/projects.module.css';
import about from './stylesheets/about.module.css';
import contact from './stylesheets/contact.module.css';
import form from './stylesheets/form.module.css';
import socials from './stylesheets/socials.module.css';
import style from "./stylesheets/projects.module.css";

interface Props {
    className?: string;
}

export const Index: FC<Props> = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav li');
        let currentSection = '';

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: window.innerWidth <= 600 ? 0.7 : 0.5,
        };

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        currentSection = sectionId;

                        // Update navigate.currentHeader class
                        const currentHeader = document.querySelector(`.${navigate.sectionHeader}`);
                        if (currentHeader) {
                            currentHeader.textContent = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
                        }

                        navLinks.forEach(link => {
                            if (link.textContent && link.textContent.toLowerCase() === sectionId.toLowerCase()) {
                                if (!link.classList.contains(navigate.active)) {
                                    link.classList.add(navigate.active);
                                }
                            } else {
                                link.classList.remove(navigate.active);
                            }
                        });
                    }
                });
            },
            options
        );

        sections.forEach(section => observer.observe(section));
    }, []);


    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        const checkbox = document.getElementById('checkbox') as HTMLInputElement | null;
        if (checkbox != null) {
            checkbox.checked = false;
        }

        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    /*<Link className={projects.cardButton} to={'/projects/konnect-app'}>View
                                    Project
                                </Link>
                                 to={'/projects/dlt-calculator-app'}
                                 to={'/projects/best-tv-app'}
     */

    const socialLinks = (
        <>
            <div className={socials.twitterIcon}>
                <a className={socials.links} title="Twitter"
                   href="https://twitter.com/MalikDHeron"
                   target="_blank"><i
                    className="fa-brands fa-twitter"></i></a>
            </div>
            <div className={socials.githubIcon}>
                <a className={socials.links} title="Github" href="https://github.com/MalikHeron"
                   target="_blank"><i
                    className="fa-brands fa-github"></i></a>
            </div>
            <div className={socials.linkedinIcon}>
                <a className={socials.links} title="LinkedIn"
                   href="https://www.linkedin.com/in/malik-heron-18b961158/"
                   target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className={socials.emailIcon}>
                <a className={socials.links} title="Email" href="mailto:malik.heron2001@gmail.com"
                   target="_blank"><i
                    className="fa-solid fa-envelope"></i></a>
            </div>
        </>
    )

    const navLinks = (
        <>
            <li id="homeTab" className={`${navigate.tab} ${navigate.active}`}
                onClick={() => handleClick("home")}>HOME
            </li>
            <li id="aboutTab" className={navigate.tab} onClick={() => handleClick("about")}>ABOUT</li>
            <li id="experienceTab" className={navigate.tab}
                onClick={() => handleClick("experience")}>EXPERIENCE
            </li>
            <li id="projectsTab" className={navigate.tab} onClick={() => handleClick("projects")}>PROJECTS
            </li>
            <li id="contactTab" className={navigate.tab} onClick={() => handleClick("contact")}>CONTACT</li>
        </>
    )

    return (
        <>
            <header>
                <div className={socials.container}>{socialLinks}</div>
                <div className={navigate.appBar}>
                    <input id="checkbox" className={navigate.menuToggle} type="checkbox"/>
                    <label className={navigate.menuButton} htmlFor="menuToggle">
                        <span></span>
                    </label>
                    <h2 className={navigate.sectionHeader}/>
                    <nav className={navigate.container}>{navLinks}</nav>
                </div>
                <nav className={navigate.container}>{navLinks}</nav>
                <a className={navigate.resume} href="/assets/resume.pdf" target="_blank">View Resume</a>
            </header>

            <main>
                <section id="home" className={home.section}>
                    <h1 id="title" className={about.slideInLeft}>Malik Heron</h1>
                    <h2>Software Developer and UX Designer</h2>
                    <p className={home.description}>
                        Focused on developing modern applications with user-friendly interfaces.
                    </p>
                </section>

                <section id="about" className={about.section}>
                    <h1>About Me</h1>
                    <p className={about.description}>
                        As a passionate problem-solver, I thrive on the challenge of
                        crafting efficient and functional code. My goal is to create a
                        seamless user experience through modern and visually
                        appealing UI design. I believe that it is the little details that keep
                        users coming back to apps and websites time and time again.
                        <br/><br/>
                        With experience in a variety of languages and tools, I am always
                        looking for new ways to work smarter and more efficiently. While
                        my focus is currently on a few key areas, I am excited to continue
                        expanding my skills and knowledge in the future.
                    </p>
                </section>

                <section id="experience" className={experience.section}>
                    <h1>Experience</h1>
                    <h2>Applications</h2>
                    <p className={experience.description}>
                        Throughout my university experience and over the years, I have
                        had the pleasure of using various applications for different
                        projects. My favorites include:
                    </p>
                    <ul>
                        <li>Android Studio</li>
                        <li>Figma</li>
                        <li>Intellij</li>
                        <li>Pycharm</li>
                        <li>VS Code</li>
                        <li>Webstorm</li>
                    </ul>

                    <h2>Languages</h2>
                    <p className={experience.description}>
                        I am dedicated to expanding my proficiency in a diverse
                        range of programming languages within my areas of interest
                        in development. I have experience in:
                    </p>
                    <ul>
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

                    <h2>Focus</h2>
                    <p className={experience.description}>
                        I am currently focused on mobile and web development, while
                        continuously expanding my knowledge in UX and UI design. I
                        believe that having a strong understanding of user experience
                        and user interface design is crucial in creating successful and
                        user-friendly applications.
                    </p>
                    <a className={experience.resume} href="/assets/resume.pdf" target="_blank">View Resume</a>
                </section>

                <section id="projects" className={projects.section}>
                    <h1>Projects</h1>
                    <div className={style.cardContainer}><Projects/></div>
                </section>

                <section id="contact" className={contact.section}>
                    <h1>Contact</h1>
                    <h2>Let's Get In Touch</h2>
                    <h3>I look forward to hearing from you.</h3>
                    <form
                        action="https://formsubmit.co/malik.heron2001@gmail.com"
                        className={form.container}
                        method="post"
                    >
                        <div className={form.nameEmail}>
                            <label htmlFor="name"></label>
                            <input
                                autoComplete="off"
                                className={form.name}
                                name="Name"
                                placeholder="Your name"
                                required
                                type="text"
                            />
                            <br/>

                            <label htmlFor="email"></label>
                            <input
                                autoComplete="off"
                                className={form.email}
                                name="Email Address"
                                placeholder="Email address"
                                required
                                type="email"
                            />
                            <br/>
                        </div>

                        <label htmlFor="message"></label>
                        <textarea
                            autoComplete="off"
                            className={form.message}
                            name="Message"
                            placeholder="Write something..."
                            required
                        ></textarea>
                        <br/>

                        <input name="_captcha" type="hidden" value="true"/>
                        <input className={form.submit} type="submit" value="Submit"/>
                    </form>
                    <div className={socials.containerM}>{socialLinks}</div>
                    <p>&copy; 2023 Malik Heron</p>
                </section>
            </main>

            <footer><p>&copy; 2023 Malik Heron</p></footer>
        </>
    );
};