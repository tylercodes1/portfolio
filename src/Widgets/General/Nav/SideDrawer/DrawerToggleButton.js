import React, {Component} from 'react'
import './DrawerToggleButton.css'

class drawerToggleButton extends Component {
    constructor() {
        super()
    }
    render () {
        return (
            <div>
                <button className="toggle_button" onClick={this.props.onClick}>
                    <div className="toggle_button_line"></div>
                    <div className="toggle_button_line"></div>
                    <div className="toggle_button_line"></div>
                </button>
            </div>
        )
    }
}

export default drawerToggleButton;