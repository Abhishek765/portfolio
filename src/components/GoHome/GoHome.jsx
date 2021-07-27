import React from 'react'
import './GoHome.css';
import homeIconWhite from '../../assets/home_white.png';
import homeIconBlack from '../../assets/home_black.png';
import { useHistory, useLocation } from 'react-router-dom';


const GoHome = () => {
    const history = useHistory();
    const location = useLocation();

    const WhiteBtn = location.pathname === '/';


    const navigateToHome = () => {
        history.push('/');
    }
    return (
        <button
            className={`go-home-btn 
            ${WhiteBtn ? 'white_bkg' : 'gradient_bkg'}`
            }
            onClick={navigateToHome}>
            <img
                className="home_icon"
                src={WhiteBtn ? homeIconBlack : homeIconWhite}
                alt="Home icon" />
        </button>
    )
}

export default GoHome;
