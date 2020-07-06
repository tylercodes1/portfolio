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
                    <FilterButton text="Web Development" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton text="React" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton text="JavaScript" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                    <FilterButton text="Other" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                </div>
                <div className="project_container">
                    <ProjectPreview display={this.state.selected.length < 1 ? null :
                    !this.state.selected.some(el => ("Web Development React JavaScript").includes(el))? "hide_project" : null} 
                    title="Portfolio" src="Portfolio.PNG" url="https://tylersportfolio.netlify.app/" stack="React JavaScript"/>
                    <ProjectPreview display={this.state.selected.length < 1 ? null :
                    !this.state.selected.some(el => ("Other").includes(el))? "hide_project" : null} 
                    title="Other" src="Portfolio.PNG" url="https://tylersportfolio.netlify.app/" stack=" JavaScript"/>
                </div>
            </div>
        )
    }
}

export default Portfolio