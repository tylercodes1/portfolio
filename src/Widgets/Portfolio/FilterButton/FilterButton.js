import React from 'react'
import './FilterButton.css'

function FilterButton(props) {
    return (
        <div className={props.selected.includes(props.filterName) ? "filter_button selected" : 'filter_button'}>
            <div onClick={() => props.onClick(props.filterName)}>{props.filterName}</div>
        </div>
    )
}

export default FilterButton