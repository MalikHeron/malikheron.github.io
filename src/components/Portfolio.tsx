import React, {useEffect} from 'react';
import type {FC} from 'react';

import resets from './_resets.module.css';
import classes from './Portfolio.module.css';

interface Props {
    className?: string;
}

export const Portfolio: FC<Props> = () => {

    useEffect(() => {

        function isHomeInView() {
            return window.scrollY < 315.79998779296875;
        }

        function isProjectsInView(id: string) {
            const element = document.querySelector(`#${id}`) as HTMLElement;
            const rect = element.getBoundingClientRect();
            return rect.top <= 0 && rect.bottom >= -49;
        }

        function isAboutInView(id: string) {
            const element = document.querySelector(`#${id}`) as HTMLElement;
            const rect = element.getBoundingClientRect();
            return rect.top <= 0 && rect.bottom > 68.5999755859375;
        }

        function isContactInView(id: string) {
            const element = document.querySelector(`#${id}`) as HTMLElement;
            const rect = element.getBoundingClientRect();
            return rect.top <= 68.5999984741211 && rect.bottom <= 775.8000106811523;
        }

        window.onload = () => {
            window.addEventListener('scroll', () => {
                const home = isHomeInView();
                const projects = isProjectsInView('projects');
                const about = isAboutInView('about');
                const contact = isContactInView('contact');

                const homeHighlight = document.querySelector('#homeHighlight') as HTMLElement;
                const projectsHighlight = document.querySelector('#projectsHighlight') as HTMLElement;
                const aboutHighlight = document.querySelector('#aboutHighlight') as HTMLElement;
                const contactHighlight = document.querySelector('#contactHighlight') as HTMLElement;

                homeHighlight.style.backgroundColor = home ? '#d3d3d3' : 'white';
                projectsHighlight.style.backgroundColor = projects ? '#d3d3d3' : 'white';
                aboutHighlight.style.backgroundColor = about ? '#d3d3d3' : 'white';
                contactHighlight.style.backgroundColor = contact ? '#d3d3d3' : 'white';
            });
        }
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`} id="home">
            <div className={classes.navBarContainer}>
                <div id="homeHighlight" className={classes.homeHighlight}>
                    <div className={classes.home} onClick={() => handleClick("home")}>Home</div>
                </div>
                <div id="projectsHighlight" className={classes.projectsHighlight}>
                    <div className={classes.projects} onClick={() => handleClick("projects")}>Projects</div>
                </div>
                <div id="aboutHighlight" className={classes.aboutHighlight}>
                    <div className={classes.about} onClick={() => handleClick("about")}>About</div>
                </div>
                <div id="contactHighlight" className={classes.contactHighlight}>
                    <div className={classes.contact} onClick={() => handleClick("contact")}>Contact</div>
                </div>
            </div>
            <div className={classes.introContainer}>
                <div className={classes.introSocials}>
                    <div className={classes.linkedinIcon}>
                        <a className={classes.links} href="https://www.linkedin.com/in/malik-heron-18b961158/"
                           target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className={classes.githubIcon}>
                        <a className={classes.links} href="https://github.com/MalikHeron" target="_blank"><i
                            className="fa-brands fa-github"></i></a>
                    </div>
                    <div className={classes.instagramIcon}>
                        <a className={classes.links} href="https://www.instagram.com/malik_heron/?hl=en"
                           target="_blank"><i
                            className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className={classes.emailIcon}>
                        <a className={classes.links} href="mailto:malik.heron2001@gmail.com" target="_blank"><i
                            className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className={classes.greeting}>
                    <p>Hi there! I’m Malik Heron</p>
                </div>
                <div className={classes.introduction}>
                    <p>
                        I'm a software developer and UX designer with a passion for developing Android apps.<br/>
                        I'm always eager to learn and expand my knowledge in the field. Welcome to my<br/>
                        portfolio where you can learn more about my skills and experience.
                    </p>
                </div>
                <div className={classes.projectsBackground} id="projects">
                    <div className={classes.projectsHeader}>Featured Projects</div>
                    <div className={classes.projectCards}>
                        <div className={classes.projectCard1}>
                            <img className={`${classes.icon1} ${classes.icon}`} src={'/assets/best_tv.jpg'}
                                 alt="Best TV"></img>
                        </div>
                        <div className={classes.projectCard2}>
                            <img className={`${classes.icon2} ${classes.icon}`} src={'/assets/download_calculator.jpg'}
                                 alt="DLT Calculator"></img>
                        </div>
                        <div className={classes.projectCard3}>
                            <img className={`${classes.icon3} ${classes.icon}`} src={'/assets/konnect.jpg'}
                                 alt="Konnect"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.aboutContainer} id="about">
                <div className={classes.aboutHeader}>About</div>
                <div className={classes.aboutDescription}>
                    <p>
                        As a passionate problem-solver, I thrive on the challenge of crafting efficient and functional
                        code. My <br/>goal is to create a seamless user experience through modern and visually appealing
                        UI design. I believe <br/>that it’s the little details that keep users coming back to apps and
                        websites time and time again. With <br/>experience in a variety of languages and tools, I’m
                        always looking for new ways to work smarter and more <br/>efficiently. While my focus is
                        currently on a few key areas, I’m excited to continue expanding my skills <br/>
                        and knowledge in the future.
                    </p>
                </div>
                <div className={classes.aboutOverviewContainer}>
                    <img className={`${classes.programmerIcon} ${classes.icon}`} src={'/assets/programmer.jpg'}
                         alt="Programmer"></img>
                    <div className={classes.aboutOverviewItems}>
                        <div className={classes.languagesGroup}>
                            <div className={classes.languages}>Languages</div>
                            <div className={classes.columnGroup}>
                                <div className={classes.column}>
                                    <div className={classes.itemBox}>C</div>
                                    <div className={classes.itemBox}>C++</div>
                                    <div className={classes.itemBox}>HTML</div>
                                    <div className={classes.itemBox}>Java</div>
                                </div>
                                <div className={classes.column}>
                                    <div className={classes.itemBox}>Kotlin</div>
                                    <div className={classes.itemBox}>Python</div>
                                    <div className={classes.itemBox}>SQL</div>
                                    <div className={classes.itemBox}>XML</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.toolsGroup}>
                            <div className={classes.tools}>Tools</div>
                            <div className={classes.androidStudio}>Android Studio</div>
                            <div className={classes.figma}>Figma</div>
                            <div className={classes.github}>Github</div>
                            <div className={classes.intellij}>Intellij</div>
                            <div className={classes.pycharm}>Pycharm</div>
                            <div className={classes.vSCode}>VS Code</div>
                            <div className={classes.webstorm}>Webstorm</div>
                        </div>
                        <div className={classes.focusGroup}>
                            <div className={classes.focus}>Focus</div>
                            <div className={classes.mobileAppDevelopment}>Mobile App Development</div>
                            <div className={classes.userInterfaceDesign}>User Interface Design</div>
                            <div className={classes.userExperienceDesign}>User Experience Design</div>
                            <div className={classes.webDevelopment}>Web Development</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.contactsContainer} id="contact">
                <div className={classes.contactHeader}>Let’s Get In Touch</div>
                <div className={classes.contactSocials}>
                    <div className={classes.linkedinIcon}>
                        <a className={classes.links} href="https://www.linkedin.com/in/malik-heron-18b961158/"
                           target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className={classes.githubIcon}>
                        <a className={classes.links} href="https://github.com/MalikHeron" target="_blank"><i
                            className="fa-brands fa-github"></i></a>
                    </div>
                    <div className={classes.instagramIcon}>
                        <a className={classes.links} href="https://www.instagram.com/malik_heron/?hl=en"
                           target="_blank"><i
                            className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className={classes.emailIcon}>
                        <a className={classes.links} href="mailto:malik.heron2001@gmail.com" target="_blank"><i
                            className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className={classes.contactDescription}>
                    <p>
                        Feel free to send me a message, I look forward to <br/>working with you.
                    </p>
                </div>
                <div className="contact">
                    <form
                        action="https://formsubmit.co/malik.heron2001@gmail.com"
                        className={classes.contactForm}
                        method="post"
                    >
                        <div className={classes.nameEmail}>
                            <label htmlFor="name"></label>
                            <input
                                autoComplete="off"
                                className={classes.name}
                                name="Name"
                                placeholder="Your name"
                                required
                                type="text"
                            />
                            <br/>

                            <label htmlFor="email"></label>
                            <input
                                autoComplete="off"
                                className={classes.email}
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
                            className={classes.message}
                            name="Message"
                            placeholder="Write something..."
                            required
                        ></textarea>
                        <br/>

                        <input name="_captcha" type="hidden" value="true"/>
                        <input className={classes.submit} id="submit" type="submit" value="Submit"/>
                    </form>
                </div>
                <div className={classes.copyright}>© All rights reserved</div>
            </div>
        </div>
    );
};