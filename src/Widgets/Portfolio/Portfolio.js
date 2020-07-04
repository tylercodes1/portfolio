import React, {Component} from 'react'
import './Portfolio.css'
import FilterButton from './FilterButton/FilterButton';
import BlockButton from '../Misc/Buttons/BlockButton';

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
                <FilterButton text="React" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                <FilterButton text="Web Development" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} />
                <h1>Portfolio</h1>
            </div>
        )
    }
}

export default Portfolio