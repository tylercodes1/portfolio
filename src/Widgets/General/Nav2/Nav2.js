import React, {Component} from 'react'
import './Nav2.css'
import {Link} from 'react-router-dom'
import Nav2Item from './Nav2Item';
import SocialItem from './SocialItem';
import Github from './../../../assets/github/github';
import Linkedin from './../../../assets/linkedin/linkedin';
import PersonalLogo from '../../../assets/personal_logo/personallogo';


class Nav2 extends Component {

    constructor() {
        super() 
        this.state = {
            active: 'home'
        }
    }

    handleClick(activeName) {
        this.setState(() => {
            return {
                active: activeName
            }
        })
    }

    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <PersonalLogo />
                </div>
                <div className="nav_items">
                    <Nav2Item link="home" active={this.state.active} onClick={(urmom => this.handleClick(urmom))} />   
                    <Nav2Item link="portfolio" active={this.state.active} onClick={(urmom => this.handleClick(urmom))} />  
                    <Nav2Item link="skills" active={this.state.active} onClick={(urmom => this.handleClick(urmom))} />
                    <Nav2Item link="about" active={this.state.active} onClick={(urmom => this.handleClick(urmom))} />
                    <Nav2Item link="Contact" active={this.state.active} onClick={(urmom => this.handleClick(urmom))} />
                </div>
                <div className="social_items">
                    <SocialItem icon={<Github />} url="https://github.com/tkmoney11"></SocialItem>
                    <SocialItem icon={<Linkedin />} url="https://www.linkedin.com/in/tylerkim11/"></SocialItem>
                </div>
            </div>
            
        )
    }
}

export default Nav2