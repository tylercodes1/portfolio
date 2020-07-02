import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Drawer.css'
import SocialItem from '../SocialItem';
import Github from './../../../../assets/github/github';
import Linkedin from './../../../../assets/linkedin/linkedin';

function Drawer(props) {
    return ( 
        <div className="drawer">
            <div className="drawer_items">
                <Link to="/home" onClick={props.onClick}>
                    <div className="drawer_item">Home</div>
                </Link> 
                <Link to="/portfolio" onClick={props.onClick}>
                    <div className="drawer_item" >Portfolio</div>
                </Link>
                <Link to="/skills" onClick={props.onClick}>
                    <div className="drawer_item">Skills</div>
                </Link> 
                <Link to="/about" onClick={props.onClick}>
                    <div className="drawer_item">About</div>
                </Link>
                <Link to="/contact" onClick={props.onClick}>
                    <div className="drawer_item">Contact</div>
                </Link> 
            </div>
            <div className="social_links">
                <SocialItem icon={<Github />} url="https://github.com/tkmoney11"></SocialItem>
                <SocialItem icon={<Linkedin />} url="https://www.linkedin.com/in/tylerkim11/"></SocialItem>
            </div>
        </div>
    )
}

export default Drawer