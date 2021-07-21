import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    scrollPadding = -195

    render() {
        return (
        <nav className="nav" id="navbar">
            <div className="nav-content">
            <ul>
                <li className="nav-item">
                    <Link className="link" to="about" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        ABOUT ME <p className="dot">•</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="education" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        EDUCATION <p className="dot">•</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="experience" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        EXPERIENCE <p className="dot">•</p>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="link" to="publications" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        PUBLICATIONS <p className="dot">•</p>
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link className="link" to="skills" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        SKILLS & INTERESTS <p className="dot">•</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="link" to="courses" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        COURSEWORK <p className="dot">•</p>
                    </Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="link" to="projects" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        PROJECTS <p className="dot">•</p>
                    </Link>
                </li> */}
                {/* <li className="nav-item">
                    <Link className="link" to="photography" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        PHOTOGRAPHY <p className="dot">•</p>
                    </Link>
                </li> */}
                <li className="nav-item">
                    <Link className="link" to="contact" activeClass="active" spy={true} smooth={true} offset={this.scrollPadding} duration={500}>
                        CONTACT <p className="dot">•</p>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        );
    }
}