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
        console.log("before: " + this.state.selected)
        console.log("Filter class: " + filterClass)
        this.setState(prevState => {
            const select = prevState.selected
            let ind = select.indexOf(filterClass)
            console.log(select)
            if (ind === -1) {
                console.log('i made it')
                select.concat(filterClass)
            } else {
                select.splice(ind,1)
            }
            console.log(select)
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