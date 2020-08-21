import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./logo.svg";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="photography"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Photography
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}