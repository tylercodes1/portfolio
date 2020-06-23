import React, {Component} from "react"
import Toggle from './Toggle'

class Nav extends Component {
    render() {
        return (
            <nav className="NavBar">
                <h1>TYLER KIM</h1>
                <Toggle /> 
            </nav>
        )
    }
}

export default Nav;