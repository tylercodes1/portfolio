import React from "react";
import "./FilterButton.css";

function FilterButton(props) {
	return (
		<div
			className={
				"filter_button" +
				(props.selected.includes(props.text)
					? " filter_select"
					: isFilteredIn(props.filteredIn, props.filteredOut, props.text)
					? " filtered_out"
					: " i am a penis")
			}
			onClick={() => props.onClick(props.text)}
		>
			{props.text}
		</div>
	);
}

// filtered out logic: checks if button is still available to be pressed:
// are available projects 'filtered in'
function isFilteredIn(fi, fo, txt) {
	if (fo.length < 1) {
		return false;
	} else {
		return !fi.some((element) => {
			return element.split(" ").includes(txt);
		});
	}
}

export default FilterButton;
