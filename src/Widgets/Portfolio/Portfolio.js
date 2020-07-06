import React, {Component} from 'react'
import './Portfolio.css'
import FilterButton from './FilterButton/FilterButton';
import BlockButton from '../Misc/Buttons/BlockButton';
import ProjectPreview from './ProjectPreview/ProjectPreview';

class Portfolio extends Component {

    constructor() {
        super()
        this.state = {
            selected: [],
            filterCombos: [
                "Web Development React JavaScript",
                "Other"
            ],
            filteredOut: []
        }
    }
    
    removeFilter(element ,filter) {
        return element != filter;
    }

    handleSelect(filterClass) {
        console.log("(Web Development React JavaScript).includes(Web Development)" + ("Web Development React JavaScript").includes("Web Development"))
        this.setState(prevState => {
            let select = prevState.selected
            let ind = select.indexOf(filterClass)

            // filtering logic
            let fc = prevState.filterCombos
            let fo = prevState.filteredOut
            if (ind === -1) {
                // adds filterClass to selected classes
                select = select.concat(filterClass) // the problem was here; concat method returns an array 
                // update classes of projects available to sort
                fc.forEach(element => {
                    if (!element.includes(filterClass)) {
                        if (!fo.includes(element)) {
                            fo = fo.concat(element)
                        }
                    }
                });
            } else {
                select.splice(ind, 1)
                if (select.length < 1) {
                    fo = []
                }
            }
            
            console.log(fo)
            return {
                selected: select,
                filterCombos: fc,
                filteredOut: fo
            }
        })
    }

    // handleActive(filters) {
    //     let tmp = this.state.selected
    //     while (tmp.length > 0) {
    //         for (s in tmp) {
                
    //         }
    //     }
    //     return null
    // }

    render() {
        return (
            <div className="portfolio_page">
                <div className="filter_header">
                    <FilterButton filteredOut={this.state.filteredOut} text="Web Development" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton filteredOut={this.state.filteredOut} text="React" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton filteredOut={this.state.filteredOut} text="JavaScript" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton filteredOut={this.state.filteredOut} text="Other" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                </div>
                <div className="project_container">
                    <ProjectPreview display={this.state.selected.length < 1 ? null :
                    !this.state.selected.some(el => (this.state.filterCombos[0]).includes(el))? "hide_project" : null} 
                    title="Portfolio" src="Portfolio.PNG" url="https://tylersportfolio.netlify.app/" stack="React JavaScript"/>
                    <ProjectPreview display={this.state.selected.length < 1 ? null :
                    !this.state.selected.some(el => (this.state.filterCombos[1]).includes(el))? "hide_project" : null} 
                    title="Other" src="Portfolio.PNG" url="https://tylersportfolio.netlify.app/" stack=" JavaScript"/>
                </div>
            </div>
        )
    }
}

export default Portfolio