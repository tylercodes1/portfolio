import React, {Component} from 'react'
import './Backdrop.css'

class Backdrop extends Component {
    render() {
        return (
            <div className="backdrop" onClick={this.props.onClick}></div>
        )
    }

}

export default Backdrop