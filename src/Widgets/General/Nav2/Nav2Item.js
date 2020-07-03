import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Nav2Item(props) {
    console.log(props.active)
    return (
        <Link to={"/" + props.link}>                    
            <div className="item">
                <div className={"word" + (props.active.slice(1) === props.link ? ' selected' : '')}>{props.link.slice(0,1).toUpperCase() + props.link.slice(1)}</div>
                <div className={"back" + (props.active.slice(1) === props.link ? ' selected' : '')} />
            </div>
        </Link>   
    )
}

export default Nav2Item
