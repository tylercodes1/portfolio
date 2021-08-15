import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import FilterButton from "./FilterButton/FilterButton";
import BlockButton from "../Misc/Buttons/BlockButton";
import ProjectPreview from "./ProjectPreview/ProjectPreview";
import AppContext from "../General/support/AppContext";
import { CircularProgress } from "@material-ui/core";

function Portfolio() {
	const [selected, setSelected] = useState([])
	const [filterCombos, setFilterCombos] = useState([
		"Web-Development Mobile-Responsive React JavaScript",
		"Web-Development Fullstack API Spring-Boot Java",
		"Web-Development Fullstack React JavaScript",
		"Web-Development JavaScript First-Ever-Project-:)",
	])
	const [filteredOut, setFilteredOut] = useState([])
	const [filteredIn, setFilteredIn] = useState([
		"Web-Development Mobile-Responsive React JavaScript",
		"Web-Development Java API Fullstack Spring-Boot",
		"Web-Development Fullstack React JavaScript",
		"Web-Development JavaScript First-Ever-Project-:)",
	])

	const handleSelect = (currentFilter) => {
		let previousSelectedFilters = selected;
		let ind = previousSelectedFilters.indexOf(currentFilter);
		// filtering logic
		let fc = filterCombos;
		let fo = filteredOut;

		// if current selected filter does not exist in previously selected filters
		if (ind === -1) {
			previousSelectedFilters =
				previousSelectedFilters.concat(currentFilter); // the problem was here; concat method returns an array
		// if current selected filter DOES exist in previously selected filters
		} else {
			previousSelectedFilters.splice(ind, 1); // removes current selected filter
		}

		fo = [];
		// clear "filtered out" if none selected
		if (previousSelectedFilters.length > 1) {
			console.log(previousSelectedFilters)
			fc.forEach((element) => {
				console.log(element.includes(previousSelectedFilters[0]))
				if (!previousSelectedFilters.every(elPS => element.includes(elPS))) {
					console.log(element, previousSelectedFilters)
					fo = fo.concat(element)
				}
			});						
		}
		console.log(fo)

		let fi = [];
		fc.forEach((elFC) => {
			if (fo.every((elFO) => {
				return elFO !== elFC
			})) {
				fi = fi.concat(elFC);
			}
		});

		setSelected(previousSelectedFilters)
		setFilterCombos(fc)
		setFilteredOut(fo)
		setFilteredIn(fi)
	}

	return (
		<div className="portfolio_page">
			<div className="tmp_msg"></div>
			<div className="filter_header">
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="First-Ever-Project-:)"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="Web-Development"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="Mobile-Responsive"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="React"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="JavaScript"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="Spring-Boot"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="Fullstack"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="API"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
				<FilterButton
					filteredIn={filteredIn}
					filteredOut={filteredOut}
					text="Java"
					onClick={(currFilter) => handleSelect(currFilter)}
					selected={selected}
				/>
			</div>
			<div className="project_container">
				<ProjectPreview
					display={
						selected.length < 1
							? null
							: !selected.every((el) =>
									filterCombos[3].split(" ").includes(el)
								)
							? "hide_project"
							: null
					}
					title="Sorting Algorithm Visualizer"
					src="Sorting-Algorithm-Viz.png"
					url="https://annieztang.github.io/Algos/"
					stack="Web-Development JavaScript First-Ever-Project-:)"
				/>
				<ProjectPreview
					display={
						selected.length < 1
							? null
							: !selected.every((el) =>
									filterCombos[0].split(" ").includes(el)
								)
							? "hide_project"
							: null
					}
					title="Portfolio"
					src="Portfolio-compressor.jpg"
					url="https://tylersportfolio.netlify.app/"
					stack="React JavaScript"
				/>
				<ProjectPreview
					display={
						selected.length < 1
							? null
							: !selected.every((el) => {
									return filterCombos[1] // THIS INDEX IS IMPORTANT FOR FILTERING
										.split(" ")
										.includes(el);
								})
							? "hide_project"
							: null
					}
					title="Messaging API"
					src="MESSAGING-API.png"
					url="http://monolith-service.herokuapp.com/swagger-ui/index.html#/"
					stack="Spring-Boot Java"
				/>
				<ProjectPreview
					display={
						selected.length < 1
							? null
							: !selected.every((el) => {
									return filterCombos[2] // THIS INDEX IS IMPORTANT FOR FILTERING
										.split(" ")
										.includes(el);
								})
							? "hide_project"
							: null
					}
					title="Messaging App"
					src="Messaging-App.png"
					url="https://fullstack-messaging-app.netlify.app/"
					stack="Spring-Boot Java"
				/>
			</div>
		</div>
	);
}

export default Portfolio;
