import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import type {FC} from 'react';

import navigate from './stylesheets/navigation.module.css';
import intro from './stylesheets/intro.module.css';
import projects from './stylesheets/projects.module.css';
import about from './stylesheets/about.module.css';
import overview from './stylesheets/overview.module.css';
import contact from './stylesheets/contact.module.css';
import text from './stylesheets/text.module.css';
import socials from './stylesheets/socials.module.css';
import * as navigation from "./utils/navigation";

interface Props {
    className?: string;
}

export const Index: FC<Props> = () => {
    useEffect(() => {
        window.onload = () => {
            window.addEventListener('scroll', () => {
                const home = navigation.isHomeInView();
                const projects = navigation.isProjectsInView('projects');
                const about = navigation.isAboutInView('about');
                const contact = navigation.isContactInView('contact');

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

    return (
        <div className={navigate.root} id="home">
            <nav className={navigate.container}>
                <div id="homeHighlight" className={navigate.homeHighlight}>
                    <div className={navigate.home} onClick={() => navigation.handleClick("home")}>Home</div>
                </div>
                <div id="projectsHighlight" className={navigate.projectsHighlight}>
                    <div className={navigate.projects} onClick={() => navigation.handleClick("projects")}>Projects
                    </div>
                </div>
                <div id="aboutHighlight" className={navigate.aboutHighlight}>
                    <div className={navigate.about} onClick={() => navigation.handleClick("about")}>About</div>
                </div>
                <div id="contactHighlight" className={navigate.contactHighlight}>
                    <div className={navigate.contact} onClick={() => navigation.handleClick("contact")}>Contact
                    </div>
                </div>
            </nav>
            <section className={intro.container}>
                <div className={intro.socials}>
                    <div className={socials.linkedinIcon}>
                        <a className={socials.links} href="https://www.linkedin.com/in/malik-heron-18b961158/"
                           target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className={socials.githubIcon}>
                        <a className={socials.links} href="https://github.com/MalikHeron" target="_blank"><i
                            className="fa-brands fa-github"></i></a>
                    </div>
                    <div className={socials.instagramIcon}>
                        <a className={socials.links} href="https://www.instagram.com/malik_heron/?hl=en"
                           target="_blank"><i
                            className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className={socials.emailIcon}>
                        <a className={socials.links} href="mailto:malik.heron2001@gmail.com" target="_blank"><i
                            className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className={text.greeting}>
                    <p>Hi there! I’m Malik Heron</p>
                </div>
                <div className={intro.description}>
                    I'm a software developer and UX designer with a passion for developing Android apps.
                    I'm always eager to learn and expand my knowledge in the field. Welcome to my
                    portfolio where you can learn more about my skills and experience.
                </div>
                <div className={projects.container} id="projects">
                    <div className={text.projectsHeader}>Featured Projects</div>
                    <div className={projects.cardGroup}>
                        <div className={projects.card} style={{backgroundColor: "#fff"}}>
                            <div className={`${projects.icon} ${projects.icon1}`}></div>
                            <div className={projects.cardDetails}>
                                <div className={projects.cardTitle}>Best TV Mobile App</div>
                                <ul className={projects.cardTags}>
                                    <li className={projects.cardTag}>Billing</li>
                                    <li className={projects.cardTag}>Communication</li>
                                    <li className={projects.cardTag}>Firebase</li>
                                    <li className={projects.cardTag}>Kotlin</li>
                                    <li className={projects.cardTag}>Maps</li>
                                </ul>
                                <Link className={projects.cardButton} to={'/projects/best-tv-app'}>View
                                    Project
                                </Link>
                            </div>
                        </div>
                        <div className={projects.card} style={{backgroundColor: "#ee2323"}}>
                            <div className={`${projects.icon} ${projects.icon2}`}></div>
                            <div className={projects.cardDetails}>
                                <div className={projects.cardTitle}>Download Time Calculator App</div>
                                <ul className={projects.cardTags}>
                                    <li className={projects.cardTag}>Calculation</li>
                                    <li className={projects.cardTag}>Estimates</li>
                                </ul>
                                <Link className={projects.cardButton} to={'/projects/dlt-calculator-app'}>View
                                    Project
                                </Link>
                            </div>
                        </div>
                        <div className={projects.card} style={{backgroundColor: "#ffc555"}}>
                            <div className={`${projects.icon} ${projects.icon3}`}></div>
                            <div className={projects.cardDetails}>
                                <div className={projects.cardTitle}>Konnect Mobile App</div>
                                <ul className={projects.cardTags}>
                                    <li className={projects.cardTag}>Communication</li>
                                    <li className={projects.cardTag}>Firebase</li>
                                    <li className={projects.cardTag}>Kotlin</li>
                                </ul>
                                <Link className={projects.cardButton} to={'/projects/konnect-app'}>View
                                    Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={about.container} id="about">
                <div className={text.aboutHeader}>About</div>
                <div className={about.description}>
                    As a passionate problem-solver, I thrive on the challenge of crafting efficient and functional
                    code. My goal is to create a seamless user experience through modern and visually appealing
                    UI design. I believe that it’s the little details that keep users coming back to apps and
                    websites time and time again. With experience in a variety of languages and tools, I’m
                    always looking for new ways to work smarter and more efficiently. While my focus is
                    currently on a few key areas, I’m excited to continue expanding my skills
                    and knowledge in the future.
                </div>
                <div className={overview.container}>
                    <img className={`${overview.programmerIcon} ${about.icon}`} src={'/assets/programmer.jpg'}
                         alt="Programmer"></img>
                    <div className={overview.itemGroup}>
                        <div className={overview.languagesGroup}>
                            <div className={overview.languagesHeader}>Languages</div>
                            <div className={overview.columnGroup}>
                                <div className={overview.column}>
                                    <div className={overview.itemBox}>C</div>
                                    <div className={overview.itemBox}>C++</div>
                                    <div className={overview.itemBox}>HTML</div>
                                    <div className={overview.itemBox}>Java</div>
                                </div>
                                <div className={overview.column}>
                                    <div className={overview.itemBox}>Kotlin</div>
                                    <div className={overview.itemBox}>Python</div>
                                    <div className={overview.itemBox}>SQL</div>
                                    <div className={overview.itemBox}>XML</div>
                                </div>
                            </div>
                        </div>
                        <div className={overview.toolsGroup}>
                            <div className={overview.toolsHeader}>Tools</div>
                            <div className={overview.item}>Android Studio</div>
                            <div className={overview.item}>Figma</div>
                            <div className={overview.item}>Github</div>
                            <div className={overview.item}>Intellij</div>
                            <div className={overview.item}>Pycharm</div>
                            <div className={overview.item}>VS Code</div>
                            <div className={overview.item}>Webstorm</div>
                        </div>
                        <div className={overview.focusGroup}>
                            <div className={overview.focusHeader}>Focus</div>
                            <div className={overview.item}>Mobile App Development</div>
                            <div className={overview.item}>User Interface Design</div>
                            <div className={overview.item}>User Experience Design</div>
                            <div className={overview.item}>Web Development</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={contact.container} id="contact">
                <div className={text.contactHeader}>Let’s Get In Touch</div>
                <div className={contact.socials}>
                    <div className={socials.linkedinIcon}>
                        <a className={socials.links} href="https://www.linkedin.com/in/malik-heron-18b961158/"
                           target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className={socials.githubIcon}>
                        <a className={socials.links} href="https://github.com/MalikHeron" target="_blank"><i
                            className="fa-brands fa-github"></i></a>
                    </div>
                    <div className={socials.instagramIcon}>
                        <a className={socials.links} href="https://www.instagram.com/malik_heron/?hl=en"
                           target="_blank"><i
                            className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className={socials.emailIcon}>
                        <a className={socials.links} href="mailto:malik.heron2001@gmail.com" target="_blank"><i
                            className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className={contact.description}>
                    Feel free to send me a message, I look forward to working with you.
                </div>
                <div className={contact.contact}>
                    <form
                        action="https://formsubmit.co/malik.heron2001@gmail.com"
                        className={contact.form}
                        method="post"
                    >
                        <div className={contact.nameEmail}>
                            <label htmlFor="name"></label>
                            <input
                                autoComplete="off"
                                className={contact.name}
                                name="Name"
                                placeholder="Your name"
                                required
                                type="text"
                            />
                            <br/>

                            <label htmlFor="email"></label>
                            <input
                                autoComplete="off"
                                className={contact.email}
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
                            className={contact.message}
                            name="Message"
                            placeholder="Write something..."
                            required
                        ></textarea>
                        <br/>

                        <input name="_captcha" type="hidden" value="true"/>
                        <input className={contact.submit} type="submit" value="Submit"/>
                    </form>
                </div>
                <div className={contact.copyright}>© All rights reserved</div>
            </section>
        </div>
    );
};