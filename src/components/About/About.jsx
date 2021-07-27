import React from 'react'
import Header from '../Header/Header';
import './About.css';
import aboutVector from '../../assets/about_vector.png'
import aboutAnime from '../../assets/about_anime.gif'
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me'
                details='Passionate Full-Stack Developer | MERN Developer | Problem Solver | New Technology Learner'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Developer</h3>
                    <p className='about-details'>
                        Full stack developer specializing in front end development and familar with backend development. Experienced with all stages of the development cycle for dynamic Apps.{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/Abhishek765/'
                            target="_blank"
                            rel="noreferrer"
                        >
                            my Github!
                        </a>
                    </p>


                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAddress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    )
}

export default About
