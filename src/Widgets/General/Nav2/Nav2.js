import React, { Component } from "react";
import "./Nav2.css";
import {
	BrowserRouter as Router,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import Nav2Item from "./Nav2Item";
import SocialItem from "./SocialItem";
import Github from "./../../../assets/github/github";
import Linkedin from "./../../../assets/linkedin/linkedin";
import PersonalLogo from "../../../assets/personal_logo/personallogo";

function Nav2() {
	let location = useLocation();
	return (
		<div className="navbar">
			<Link className="logo" to="/home">
				<PersonalLogo />
			</Link>
			<div className="nav_items">
				<Nav2Item link="home" active={location.pathname} />
				<Nav2Item link="portfolio" active={location.pathname} />
				{/* <Nav2Item link="skills" active={location.pathname} /> */}
				<Nav2Item link="about" active={location.pathname} />
				<Nav2Item link="contact" active={location.pathname} />
			</div>
			<div className="social_items">
				<SocialItem
					icon={<Github />}
					url="https://github.com/tylercodes1"
				></SocialItem>
				<SocialItem
					icon={
						<Linkedin class="linkedin" id1="linkedin1" id2="linkedin2" />
					}
					url="https://www.linkedin.com/in/tylerkim11/"
				></SocialItem>
			</div>
		</div>
	);
}

export default Nav2;
