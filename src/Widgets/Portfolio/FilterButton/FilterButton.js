import React from 'react'
import './FilterButton.css'

function FilterButton(props) {
    return(
        <div className="filter_button">{props.text}</div>
    )
}

export default FilterButton