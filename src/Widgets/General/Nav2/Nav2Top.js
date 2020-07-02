import React, {Component} from 'react'
import PersonalLogo from './../../../assets/personal_logo/personallogo';
import HamburgerButton from './SideDrawer/HamburgerButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav2Top extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div className="mobile_nav">
                <HamburgerButton onClick={this.props.onClick}/>
                <Link className="mobile_logo" to="/home">
                    <PersonalLogo />
                </Link>
            </div>
        )
    }
}

export default Nav2Top