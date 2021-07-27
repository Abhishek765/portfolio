import React from 'react'
import './Projects.css';
import { projectsData } from '../../assets/projectsData';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Projects'
                details="Here are a few cool things I've worked on, do check them out!"
            />

            <div className='project-cards-container'>
                {
                    projectsData.map(
                        ({
                            projectName,
                            projectDescription,
                            imageUrl,
                            videoUrl,
                            projectUrl,
                        }) => {
                            return (
                                <ProjectCard key={imageUrl}
                                    projectName={projectName}
                                    projectDescription={projectDescription}
                                    projectUrl={projectUrl}
                                    imageUrl={imageUrl}
                                    videoUrl={videoUrl}
                                />
                            );
                        }
                    )
                }
            </div>

            <FooterLink
                phrase='Check out '
                link='my skills!'
                toAddress='/skills'
            />
        </div>
    )
}

export default Projects
