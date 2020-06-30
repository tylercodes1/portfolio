import React, {Component} from 'react'
import './Test.css'
import Drawing from '../../assets/drawing'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TestItem from './TestItem'

class Test extends Component {
    constructor() {
        super()
        this.state = {
            active: 'test'
        } 
    }

    handleClick(activeName) {
        console.log(activeName)
        this.setState(prevState => {
            return {
                active: activeName
            }
        }) 
    }

    render() {
        return (
            <Router>
                <div className="navs">
                    <TestItem link="test" active={this.state.active} onClick={(urmom) => this.handleClick(urmom)}/>
                    <TestItem link="skills" active={this.state.active} onClick={(urmom) => this.handleClick(urmom)} />
                    <TestItem link="portfolio" active={this.state.active} onClick={(urmom) => this.handleClick(urmom)} />
                {/* <img src={drawing} alt="" className="logo"/> */}
                {/* <object className="logo" data={drawing} type="image/svg+xml"></object> */}
                {/* <Drawing className="LO"/> */}
                </div>
            </Router>
            
        )
    }
}

export default Test