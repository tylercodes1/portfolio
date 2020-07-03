import React from 'react';
import './BlockButton.css'

function BlockButton(props) {
    return(
        <div className="block_button">{props.text}</div>
    )
}

export default BlockButton