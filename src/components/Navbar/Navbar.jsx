import React from 'react'
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu'
import './Navbar.css';

const Navbar = () => {
    return (
        <Menu Animation="bubble">
            <NavLink exact activeClassName="active_class" className="menu-item" to="/">Home</NavLink>
            <NavLink exact activeClassName="active_class" className="menu-item" to="/about">About</NavLink>
            <NavLink exact activeClassName="active_class" className="menu-item" to="/projects">Projects</NavLink>
            <NavLink exact activeClassName="active_class" className="menu-item" to="/skills">Skills</NavLink>
            <NavLink exact activeClassName="active_class" className="menu-item" to="/contact">Contact</NavLink>
        </Menu>
    )
}

export default Navbar;
