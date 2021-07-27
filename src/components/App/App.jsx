import React from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ErrorPage from '../ErrorPage/ErrorPage';
import Navbar from '../Navbar/Navbar';
import GoHome from '../GoHome/GoHome';

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route component={ErrorPage} />
            </Switch>
            <GoHome />
        </HashRouter>

    )
}

export default App;