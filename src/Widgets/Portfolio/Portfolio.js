import React, {Component} from 'react'
import './Portfolio.css'
import FilterButton from './FilterButton/FilterButton';
import BlockButton from '../Misc/Buttons/BlockButton';

class Portfolio extends Component {

    constructor() {
        super()
        this.state = {
            selected: ''
        }
    }
    
    handleSelect(filterClass) {
        console.log(this.state.selected)
        this.setState(prevState => {
            if (prevState.selected.includes(filterClass)) {
                return {
                    selected: prevState.selected.replace(filterClass + ' ', '')
                }
            }
            return {
                selected: prevState.selected.concat(prevState.selected, filterClass + ' ')
            }
        })
    }

    render() {
        return (
            <div className="portfolio_page">
                <FilterButton text="React" onClick={(urmom) => this.handleSelect(urmom)} selected={this.state.selected} filterName="React"/>
                {/* <BlockButton text="React"></BlockButton> */}
                <h1>Portfolio</h1>
            </div>
        )
    }
}

export default Portfolio