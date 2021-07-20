import React, { Component } from "react";
import "./Portfolio.css";
import FilterButton from "./FilterButton/FilterButton";
import BlockButton from "../Misc/Buttons/BlockButton";
import ProjectPreview from "./ProjectPreview/ProjectPreview";

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			selected: [],
			filterCombos: [
				"Web-Development Mobile-Responsive React JavaScript",
				"Web-Development Fullstack API Spring-Boot Java",
				"Web-Development Fullstack React JavaScript",
				"Web-Development JavaScript First-Ever-Project-:)",
			],
			filteredOut: [],
			filteredIn: [
				"Web-Development Mobile-Responsive React JavaScript",
				"Web-Development Java API Fullstack Spring-Boot",
				"Web-Development Fullstack React JavaScript",
				"Web-Development JavaScript First-Ever-Project-:)",
			],
		};
	}

	removeFilter(element, filter) {
		return element != filter;
	}

	handleSelect(currentFilter) {
		this.setState((prevState) => {
			let previousSelectedFilters = prevState.selected;
			let ind = previousSelectedFilters.indexOf(currentFilter);
			// filtering logic
			let fc = prevState.filterCombos;
			let fo = prevState.filteredOut;
			// console.log(previousSelectedFilters, ind, fc, fo, currentFilter);

			// if current selected filter does not exist in previously selected filters
			if (ind === -1) {
				previousSelectedFilters =
					previousSelectedFilters.concat(currentFilter); // the problem was here; concat method returns an array
				fc.forEach((element) => {
					console.log(element);
					if (!element.includes(currentFilter)) {
						if (
							!fo.includes(element) &&
							!previousSelectedFilters.includes(element)
						) {
							fo = fo.concat(element);
						}
					}
				});
				// if current selected filter DOES exist in previously selected filters
			} else {
				previousSelectedFilters.splice(ind, 1); // removes current selected filter

				// clear "filtered out" if none selected
				if (previousSelectedFilters.length < 1) {
					fo = [];
				} else {
					// console.log(fo, fi, currentFilter);
				}
			}

			let fi = [];
			fc.forEach((elFC) => {
				if (fo.every((elFO) => elFO !== elFC)) {
					fi = fi.concat(elFC);
				}
			});

			return {
				selected: previousSelectedFilters,
				filterCombos: fc,
				filteredOut: fo,
				filteredIn: fi,
			};
		});
	}

	render() {
		return (
			<div className="portfolio_page">
				<div className="tmp_msg"></div>
				<div className="filter_header">
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="First-Ever-Project-:)"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="Web-Development"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="Mobile-Responsive"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="React"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="JavaScript"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="Spring-Boot"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="Fullstack"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="API"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
					<FilterButton
						filteredIn={this.state.filteredIn}
						filteredOut={this.state.filteredOut}
						text="Java"
						onClick={(urmom) => this.handleSelect(urmom)}
						selected={this.state.selected}
					/>
				</div>
				<div className="project_container">
					<ProjectPreview
						display={
							this.state.selected.length < 1
								? null
								: !this.state.selected.every((el) =>
										this.state.filterCombos[3].split(" ").includes(el)
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
							this.state.selected.length < 1
								? null
								: !this.state.selected.every((el) =>
										this.state.filterCombos[0].split(" ").includes(el)
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
							this.state.selected.length < 1
								? null
								: !this.state.selected.every((el) => {
										console.log(this.state.filterCombos[0], el);
										return this.state.filterCombos[1] // THIS INDEX IS IMPORTANT FOR FILTERING
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
							this.state.selected.length < 1
								? null
								: !this.state.selected.every((el) => {
										console.log(this.state.filterCombos[0], el);
										return this.state.filterCombos[2] // THIS INDEX IS IMPORTANT FOR FILTERING
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
}

export default Portfolio;
