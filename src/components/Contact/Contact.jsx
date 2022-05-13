import React from 'react'
import './Contact.css';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import contactVector from '../../assets/contact_anime.png';
import github from '../../assets/gh.png';
import linkedin from '../../assets/li.png';
import instagram from '../../assets/in.png';
import web from '../../assets/web.png';
const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'
                    action={process.env.REACT_APP_FORMS_URL}
                    method="POST"
                >
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='_replyto'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    >
                    </textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/Abhishek765' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://linkedin.com/in/abhishek-vishwakarma17'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://instagram.com/abhivishu10'
                    className='social-icon'
                >
                    <img src={instagram} alt='social' />
                </a>

                <a href='https://Abhishek765.github.io/portfolio/' className='social-icon'>
                    <img src={web} alt='social' />
                </a>
            </div>


            <FooterLink
                phrase='Read more '
                toAddress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    )
}

export default Contact