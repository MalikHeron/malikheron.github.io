import {memo} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import {CIcon} from '../Languages/CIcon';
import {CssIcon} from '../Languages/CssIcon';
import classes from './Desktop.module.css';
import {Github1Icon} from '../Socials/Github1Icon';
import {HtmlIcon} from '../Languages/HtmlIcon';
import {Instagram1Icon} from '../Socials/Instagram1Icon';
import {JavaIcon} from '../Languages/JavaIcon';
import {KotlinIcon} from '../Languages/KotlinIcon';
import {Linkedin1Icon} from '../Socials/Linkedin1Icon';
import {PythonIcon} from '../Languages/PythonIcon';
import {SqlIcon} from '../Languages/SqlIcon';
import {XmlIcon} from '../Languages/XmlIcon';

interface Props {
    className?: string;
}

export const Desktop: FC<Props> = memo(function Desktop(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.introBackgroundShape}>
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
                <div className={classes.introSocials}>
                    <div className={classes.linkedinIcon}>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className={classes.githubIcon}>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div className={classes.instagramIcon}>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className={classes.featuredProjectsBackground}>
                <div className={classes.featuredProjectsHeader}>Featured Projects</div>
                <div className={classes.projectCards}>
                    <div className={classes.projectCard1}>
                        <div className={classes.icon18}></div>
                    </div>
                    <div className={classes.projectCard2}>
                        <div className={classes.icon17}></div>
                    </div>
                    <div className={classes.projectCard3}>
                        <div className={classes.icon16}></div>
                    </div>
                </div>
            </div>

            <div className={classes.aboutBackgroundShape}>
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
                <div className={classes.aboutOverviewShape}>
                    <div className={classes.programmerIcon}></div>

                    <div className={classes.languagesGroup}>
                        <div className={classes.languages}>Languages</div>
                        <div className={classes.c}>
                            <CIcon className={classes.icon4}/>
                        </div>
                        <div className={classes.cSS}>
                            <CssIcon className={classes.icon5}/>
                        </div>
                        <div className={classes.hTML}>
                            <HtmlIcon className={classes.icon6}/>
                        </div>
                        <div className={classes.jAVA}>
                            <JavaIcon className={classes.icon7}/>
                        </div>
                        <div className={classes.kOTLIN}>
                            <KotlinIcon className={classes.icon8}/>
                        </div>
                        <div className={classes.pYTHON}>
                            <PythonIcon className={classes.icon9}/>
                        </div>
                        <div className={classes.sQL}>
                            <SqlIcon className={classes.icon10}/>
                        </div>
                        <div className={classes.xML}>
                            <XmlIcon className={classes.icon11}/>
                        </div>
                    </div>

                    <div className={classes.focusGroup}>
                        <div className={classes.focus}>Focus</div>
                        <div className={classes.mobileAppDevelopment}>Mobile App Development</div>
                        <div className={classes.userInterfaceDesign}>User Interface Design</div>
                        <div className={classes.userExperienceDesign}>User Experience Design</div>
                        <div className={classes.webDevelopment}>Web Development</div>
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
                </div>
            </div>

            <div className={classes.outerOutline}>
                <div className={classes.name}></div>
                <div className={classes.email}></div>
                <div className={classes.message}></div>
                <div className={classes.writeSomething}>Write something...</div>
                <div className={classes.yourName}>Your name</div>
                <div className={classes.emailAddress}>Email address</div>
                <div className={classes.feelFreeToSendMeAMessageILookF}>
                    Feel free to send me a message, I look forward to working with you.
                </div>
                <div className={classes.letSGetInTouch}>Let’s Get In Touch</div>
                <div className={classes.instagram1}>
                    <Instagram1Icon className={classes.icon}/>
                </div>
                <div className={classes.github1}>
                    <Github1Icon className={classes.icon2}/>
                </div>
                <div className={classes.linkedin1}>
                    <Linkedin1Icon className={classes.icon3}/>
                </div>
                <div className={classes.AllRightsReserved}>© All rights reserved</div>
            </div>

            <div className={classes.NavBarShape}>
                <div className={classes.home}>Home</div>
                <div className={classes.projects}>Projects</div>
                <div className={classes.about}>About</div>
                <div className={classes.contact}>Contact</div>
            </div>
        </div>
    );
});
