import {memo} from 'react';
import type {FC} from 'react';

import resets from '../_resets.module.css';
import {CIcon} from '../Languages/CIcon';
import {CssIcon} from '../Languages/CssIcon';
import classes from './Desktop.module.css';
import {Github1Icon2} from '../Socials/Github1Icon2';
import {Github1Icon} from '../Socials/Github1Icon';
import {HtmlIcon} from '../Languages/HtmlIcon';
import {Instagram1Icon2} from '../Socials/Instagram1Icon2';
import {Instagram1Icon} from '../Socials/Instagram1Icon';
import {JavaIcon} from '../Languages/JavaIcon';
import {KotlinIcon} from '../Languages/KotlinIcon';
import {Linkedin1Icon2} from '../Socials/Linkedin1Icon2';
import {Linkedin1Icon} from '../Socials/Linkedin1Icon';
import {PythonIcon} from '../Languages/PythonIcon';
import {SqlIcon} from '../Languages/SqlIcon';
import {XmlIcon} from '../Languages/XmlIcon';

interface Props {
    className?: string;
}

/* @figmaId 1:2 */
export const Desktop: FC<Props> = memo(function Desktop(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            //Introduction
            <div className={classes.introBackgroundShape}>
                <div className={classes.introduction}>
                    I&#39;m a software developer and UX designer with a passion for developing Android apps. I&#39;m always
                    eager to
                    learn and expand my knowledge in the field. Welcome to my portfolio where you can learn more about my
                    skills and
                    experience.
                </div>
                <div className={classes.greeting}>Hi there! I’m Malik Heron</div>
                <div className={classes.instagram12}>
                    <Instagram1Icon2 className={classes.icon13}/>
                </div>
                <div className={classes.github12}>
                    <Github1Icon2 className={classes.icon14}/>
                </div>
                <div className={classes.linkedin12}>
                    <Linkedin1Icon2 className={classes.icon15}/>
                </div>
            </div>

            <div className={classes.featuredProjects}>
                <div className={classes.outline4}></div>
                <div className={classes.outline5}></div>
                <div className={classes.icon16}></div>
                <div className={classes.outline6}></div>
                <div className={classes.icon17}></div>
                <div className={classes.outline7}></div>
                <div className={classes.icon18}></div>
                <div className={classes.featuredProjects2}>Featured Projects</div>
            </div>

            //About
            <div className={classes.aboutBackgroundShape}></div>
            <div className={classes.outline2}></div>
            <div className={classes.about}>About</div>
            <div className={classes.icon12}></div>
            <div className={classes.aboutDescription}>
                As a passionate problem-solver, I thrive on the challenge of crafting efficient and functional code. My
                goal is
                to create a seamless user experience through modern and visually appealing UI design. I believe that
                it’s the
                little details that keep users coming back to apps and websites time and time again. With experience in
                a
                variety of languages and tools, I’m always looking for new ways to work smarter and more efficiently.
                While my
                focus is currently on a few key areas, I’m excited to continue expanding my skills and knowledge in the
                future.
            </div>

            //Languages
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

            //Tools
            <div className={classes.tools}>Tools</div>
            <div className={classes.androidStudio}>Android Studio</div>
            <div className={classes.figma}>Figma</div>
            <div className={classes.github}>Github</div>
            <div className={classes.intellij}>Intellij</div>
            <div className={classes.pycharm}>Pycharm</div>
            <div className={classes.vSCode}>VS Code</div>
            <div className={classes.webstorm}>Webstorm</div>

            //Focus
            <div className={classes.focus}>Focus</div>
            <div className={classes.mobileAppDevelopment}>Mobile App Development</div>
            <div className={classes.userInterfaceDesign}>User Interface Design</div>
            <div className={classes.userExperienceDesign}>User Experience Design</div>
            <div className={classes.webDevelopment}>Web Development</div>

            // Contact Form
            <div className={classes.outerOutline}></div>
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

            //Navigation Bar
            <div className={classes.NavBarShape}>
                <div className={classes.home}></div>
                <div className={classes.projects}>Projects</div>
                <div className={classes.home2}>Home</div>
                <div className={classes.contact}>Contact</div>
                <div className={classes.about2}>About</div>
            </div>
        </div>
    );
});
