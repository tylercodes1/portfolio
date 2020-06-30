import React, {Component} from "react"
import './SideDrawer.css'

class SideDrawer extends Component {
    constructor() {
        super()
        this.state = {
            drawerClasses: 'side_drawer'
        }
    }

    render() {
        return (
            <nav className={this.props.show ? 'side_drawer open' : 'side_drawer'}>
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideDrawer