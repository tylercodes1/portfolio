import React, {Component} from 'react'
import './App2.css'
import Nav2 from './Nav2/Nav2.js'
import About from '../About/About.js'
import Portfolio from '../Portfolio/Portfolio.js'
import Home from '../Home/Home.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App2 extends Component {

    render() {
        console.log('i am rendering');
        return (
            <Router>
                <div className="app2">
                    <Nav2 />
                    <Switch> 
                        <Route path ="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About}/>
                        <Route path="/portfolio" component={Portfolio} />
                    </Switch>
                    
                </div>
            </Router>
            
        )
    }
}

export default App2