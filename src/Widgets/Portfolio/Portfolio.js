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
                "Other",
                "React JavaScript"
            ],
            filteredOut: [],
            filteredIn: [
                "Web Development React JavaScript",
                "Other",
                "React JavaScript"
            ]
        }
    }
    
    removeFilter(element ,filter) {
        return element != filter;
    }

    handleSelect(filterClass) {
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
                // console.log('filter: ' + filterClass)
                fc.forEach(element => {
                    // console.log('Project: ' + element)
                    if (!element.includes(filterClass)) {
                        // console.log('Project does not include filter')
                        if (!fo.includes(element) && !select.includes(element)) {
                            // console.log('FO does not include: ' + element)
                            fo = fo.concat(element)
                        }
                    }
                })
            } else {
                select.splice(ind, 1)
                
                if (select.length < 1) {
                    fo = []
                } else {

                }
            }

            let fi = []
            fc.forEach(elFC => {
                if (fo.every(elFO => elFO !== elFC)) {
                    fi = fi.concat(elFC)
                }
            })

            // console.log("select: " + select)
            // console.log("ind: " + ind)
            // console.log("fc: " + fc)
            // console.log("fo: " + fo)
            // console.log("fi: " + fi)
            return {
                selected: select,
                filterCombos: fc,
                filteredOut: fo,
                filteredIn: fi
            }
        })
    }

    render() {
        return (
            <div className="portfolio_page">
                <div className="tmp_msg"></div>
                <div className="filter_header">
                    <FilterButton filteredIn={this.state.filteredIn} filteredOut={this.state.filteredOut} text="Web Development" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton filteredIn={this.state.filteredIn} filteredOut={this.state.filteredOut} text="React" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton filteredIn={this.state.filteredIn} filteredOut={this.state.filteredOut} text="JavaScript" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton filteredIn={this.state.filteredIn} filteredOut={this.state.filteredOut} text="Temp Filter Demo" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                </div>
                <div className="project_container">
                    <ProjectPreview display={this.state.selected.length < 1 ? null :
                    !this.state.selected.every(el => (this.state.filterCombos[0]).includes(el))? "hide_project" : null} 
                    title="Portfolio" src="Portfolio.PNG" url="https://tylersportfolio.netlify.app/" stack="React JavaScript"/>
                </div>
            </div>
        )
    }
}

export default Portfolio