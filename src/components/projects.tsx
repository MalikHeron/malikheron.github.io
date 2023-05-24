import React, {useEffect, useState} from 'react';
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "@firebase/firestore";

import style from './stylesheets/projects.module.css';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDdsXP7o7Ap-Oei6fqyLIkJERhv1uFP9I",
    authDomain: "website-porfolio.firebaseapp.com",
    projectId: "website-porfolio",
    storageBucket: "website-porfolio.appspot.com",
    messagingSenderId: "327817652165",
    appId: "1:327817652165:web:cb9d001f27ff79c367cdac",
    measurementId: "G-EBWB49R5HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Project {
    id: string;
    icon: string;
    title: string;
    description: string;
    tags: string[];
}

async function getProjects() {
    const projectsRef = collection(db, 'projects');
    const snapshot = await getDocs(projectsRef);
    return snapshot.docs.map(doc => doc.data() as Project);
}

export const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjects(projects);
        }
        fetchProjects().then();
    }, []);

    return (
        <div>
            {projects.map(project => (
                <div className={style.card} key={project.id}>
                    <img className={style.icon} src={`assets/${project.icon}`} alt={project.title}/>
                    <div className={style.textGroup}>
                        <span className={style.cardTitle}>
                            <h3 className={style.titleText}>{project.title}</h3>
                            <span className={style.arrow}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </span>
                        <p className={style.cardDescription}>{project.description}</p>
                        <ul className={style.cardTags}>
                            {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}