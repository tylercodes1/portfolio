import React, {Component} from 'react'
import './Portfolio.css'
import FilterButton from './FilterButton/FilterButton';
import BlockButton from '../Misc/Buttons/BlockButton';
import ProjectPreview from './ProjectPreview/ProjectPreview';

class Portfolio extends Component {

    constructor() {
        super()
        this.state = {
            selected: []
        }
    }
    
    handleSelect(filterClass) {
        this.setState(prevState => {
            let select = prevState.selected
            let ind = select.indexOf(filterClass)
            if (ind === -1) {
                select = select.concat(filterClass) // the problem was here; concat method returns an array 
            } else {
                select.splice(ind, 1)
            }
            return {
                selected: select
            }
        })
    }

    render() {
        return (
            <div className="portfolio_page">
                <div className="filter_header">
                    <FilterButton text="Web Development" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton text="React" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton text="JavaScript" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton text="Other" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                </div>
                <div className="project_container">
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                    <ProjectPreview />
                </div>
            </div>
        )
    }
}

export default Portfolio