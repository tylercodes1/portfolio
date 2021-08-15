import React, { useState } from "react";
import "./App2.css";
import Nav2 from "./Nav2/Nav2.js";
import About from "../About/About.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact.js";
import Skills from "../Skills/Skills.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav2Top from "./Nav2/Nav2Top";
import BackDrop from "./Nav2/BackDrop/BackDrop";
import Drawer from "./Nav2/SideDrawer/Drawer";
import Blog from "../Blog/Blog";
import AppContext from "./support/AppContext";

function App2() {
	const [show, setShow] = useState(false)
	const [aboutFirstLoad, setAboutFirstLoad] = useState(true)
	const [portfolioFirstLoad, setPortfolioFirstLoad] = useState(true)

	const handleClick = () => {
		setShow(!show)
	}

	const context = {
		aboutFirstLoad,
		setAboutFirstLoad,
		portfolioFirstLoad,
		setPortfolioFirstLoad
	}

	return (
		<Router>
			<div className="app2">
				<AppContext.Provider value={context}>
					<Nav2Top onClick={handleClick} />
					{show && <Drawer onClick={handleClick} />}
					{show &&  <BackDrop onClick={handleClick} />}
					{!show && <Nav2 />}
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/blog" component={Blog} />
						<Route path="/portfolio" component={Portfolio} />
						<Route path="/contact" component={Contact} />
						<Route path="/skills" component={Skills} />
					</Switch>
				</AppContext.Provider>
			</div>
		</Router>
	);
}

export default App2;
