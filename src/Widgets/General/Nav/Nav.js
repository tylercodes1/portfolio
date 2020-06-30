import React, {Component} from "react"
import './Nav.css'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'

class Nav extends Component {    
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="drawerToggleButton">
                        <DrawerToggleButton onClick={this.props.onClick}/>
                    </div>
                    <div className="toolbar_logo"><a href="/">Tyler Kim</a></div>
                    <div className="toolbar_navigation_items">
                        <ul>
                            <li><a href="/">Portfolio</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Nav;