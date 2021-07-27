import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal_overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal_container">
                <div className="upper_section">
                    <h1>Attension Please!!!</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle_section">
                    <h3>Connect with me on GitHub!</h3>
                    <p>For amazing projects and learning</p>
                </div>
                <div className="lower_section">
                    <Link to="/" onClick={closeModal} className="modal_btn btn_red">Close</Link>
                    <a
                        href="https://github.com/Abhishek765/"
                        target="_blank"
                        rel='noreferrer'
                        className="modal_btn btn_green"
                    >
                        Connect with me
                    </a>

                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;
