import React, {Component} from 'react'
import './App2.css'
import Nav2 from './Nav2/Nav2.js'
import About from '../About/About.js'
import Portfolio from '../Portfolio/Portfolio.js'
import Home from '../Home/Home.js'
import Contact from '../Contact/Contact.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav2Top from './Nav2/Nav2Top';
import BackDrop from './Nav2/BackDrop/BackDrop'
import Drawer from './Nav2/SideDrawer/Drawer'

class App2 extends Component {

    constructor() {
        super() 
        this.state = {
            show: false,
        }
    }

    handleClick() {
        console.log(this.state.show)
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        let backdrop
        let drawer
        let normalNav
        let normalSwitch
        if (this.state.show) {
            backdrop = <BackDrop onClick={() => this.handleClick()}/>
            drawer = <Drawer onClick={() => this.handleClick()}/>
        } else {
            normalNav = <Nav2 />
        }
        return (
            <Router>
                <div className="app2">
                    <Nav2Top onClick={() => this.handleClick()}/>
                    {drawer}
                    {backdrop}
                    {normalNav}
                    <Switch> 
                        <Route path ="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About}/>
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

export default App2