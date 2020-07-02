import React from 'react';
import './HamburgerButton.css'

function HamburgerButton(props) {
    return (
        <div className="hamburger_button" onClick={props.onClick}>
            <div className="hamburger_line"></div>
            <div className="hamburger_line"></div>
            <div className="hamburger_line"></div>
        </div>
    )
}

export default HamburgerButton