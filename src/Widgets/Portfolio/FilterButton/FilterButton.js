import React from 'react'
import './FilterButton.css'
// BUBBA IS GODDESS
// 
function FilterButton(props) {
    console.log('props.filteredOut: '  + props.filteredOut)
    console.log('props.text: ' + props.text)
    console.log(props.filteredOut.length < 1)
    // console.log(props.filteredOut.some(element => {
    //     console.log('element: ' + element)
    //     return element.indexOf(props.text) === -1
    // }))
    let fo = props.filteredOut
    let txt = props.text
    return(
        <div className={"filter_button" + (props.selected.includes(props.text) ? " filter_select" : 
        (isFilteredOut(props.filteredOut, props.text) ? ' filtered_out': ' i am a penis'))} 
        onClick={() => props.onClick(props.text)}>{props.text}</div>
    )
}

function isFilteredOut(fo, txt) {
    if (fo.length < 1) {
        return false
    } else {
        return !fo.some(element => {
            console.log('element: ' + element)
            console.log('txt: ' + txt)
            return element.indexOf(txt) === -1
        })
    }
}

export default FilterButton