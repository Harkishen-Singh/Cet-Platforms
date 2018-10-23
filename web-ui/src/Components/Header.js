import React, { Component } from 'react'
import './css/style_gen.css';
import {BrowserRouter as Link} from 'react-router-dom'

class HeaderTag extends Component {
    render() {
        return (
            <div className="header">
                <a href="#home" className="logo">CET - Platforms</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#profile">Profile</a>
                    <a href="#about">About</a>
                </div>
            </div>
        );
    }
}

export default HeaderTag;



const headerGarbage = () => (
    <header className="header_area">
                <div classNameName="top_menu row m0">
                    <div className="container">
                        <div className="float-left">
                            <ul className="list header_social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                        <div className="float-right">
                            <select className="lan_pack">
                                <option value="1">English</option>
                                <option value="1">Bangla</option>
                                <option value="1">Indian</option>
                                <option value="1">Aus</option>
                            </select>
                            <a className="ac_btn" href="#">My Account</a>
                            <a className="dn_btn" href="#">Donate Now</a>
                        </div>
                    </div>	
                </div>	
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <a className="navbar-brand logo_h" href="index.html"><img src={require("./img/logo.png")} alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
                                    <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                                    <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li> 
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Events</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="event.html">Event</a></li>
                                            <li className="nav-item"><a className="nav-link" href="event-details.html">Event Details</a></li>
                                        </ul>
                                    </li> 
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                            <li className="nav-item"><a className="nav-link" href="donation.html">Donation</a></li>
                                        </ul>
                                    </li> 
                                    <li className="nav-item submenu dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                            <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                        </ul>
                                    </li> 

                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><a href="#" className="search"><i className="lnr lnr-magnifier"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                    </nav>
                </div>
        </header>
);