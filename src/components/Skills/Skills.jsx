import React from 'react'
import './Skills.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import skillsVector from '../../assets/skills_vector.png';
import { skillList } from '../../assets/skillsData';
import SkillCard from './SkillCard';


const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Skills'
                details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />
            <div className='skill-card-container'>
                {
                    skillList.map(({ skillName, skillUrl }) => (
                        <SkillCard key={skillUrl}
                            skillName={skillName}
                            skillUrl={skillUrl}
                        />
                    ))}
            </div>

            <FooterLink
                phrase='Get in ' link='touch.' toAddress='/contact' />

            <div className='skills-vector-frame'>
                <img
                    src={skillsVector}
                    alt='skills'
                    className='skills-vector'
                />
            </div>
        </div>
    )
}

export default Skills
