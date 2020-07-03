import React from 'react'
import './FilterButton.css'

function FilterButton(props) {
    return(
        <div className={"filter_button" + (props.selected.includes(props.text) ? " filter_select" : '')} onClick={() => props.onClick(props.text)}>{props.text}</div>
    )
}

export default FilterButton