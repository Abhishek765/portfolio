import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import './Home.css';

import HomeAnime from '../../assets/home_anime.gif';
import Modal from '../Modal/Modal';
const Home = () => {
    const [showModal, setshowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setshowModal(true);
        }, 1500)
    }, [])
    const closeModal = () => {
        setshowModal(false);
    }
    return (
        <>
            <div id="hero" className="heroSection">

                <div className="bg-image"></div>
                <div className="hero-container">
                    <h1>Abhishek Vishwakarma</h1>
                    <p>I'm a
                        <span className="typed">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Full Stack Developer", "Programmer",
                                        "Learner"
                                    ]
                                }}
                            />
                        </span>
                    </p>
                </div>
                <div className="downArrowContainer">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="home_container">
                {
                    showModal && <Modal closeModal={closeModal} />
                }
                <div className="header_text">
                    <h1>Welcome to my Portfolio</h1>
                </div>
                <div className="head_btns">
                    <NavLink exact to="/about" className="btn btn_white">
                        <p className="btn_text">
                            Know More About Me
                        </p>
                    </NavLink>
                    <NavLink exact to="/contact" className="btn btn_transparent">
                        <p className="btn_text">
                            Connect With me
                        </p>
                    </NavLink>
                </div>
                <div className="splash_image">
                    <img src={HomeAnime} alt="homeanime" className="home_anime" />
                </div>
            </div>
        </>
    )
}

export default Home;
