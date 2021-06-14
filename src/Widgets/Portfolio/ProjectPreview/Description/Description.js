import React from "react";
import "./Description.css";
import ReactLogo from "../../../../assets/react/ReactLogo";
import JavaScriptLogo from "../../../../assets/react/JavaScriptLogo";
import Github from "./../../../../assets/github/github";

function Description(props) {
	return (
		<div className="description_view">
			<div className="smaller_backdrop">
				<div className="title">{props.title}</div>
				<div className="logo_container">
					{/* {props.stack.includes("React") ? <ReactLogo /> : null}
                    {props.stack.includes("JavaScript") ? <JavaScriptLogo /> : null}   */}
				</div>
			</div>
		</div>
	);
}

export default Description;
