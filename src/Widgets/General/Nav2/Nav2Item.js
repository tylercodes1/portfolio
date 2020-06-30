import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Nav2Item(props) {
    return (
        <Link to={"/" + props.link} onClick={() => props.onClick(props.link)}>                    
            <div className="item">
                <div className={(props.active === props.link ? ' selected' : '')}>{props.link.slice(0,1).toUpperCase() + props.link.slice(1)}</div>
                <div className={"back" + (props.active === props.link ? ' selected' : '')} />
            </div>
        </Link>   
    )
}

export default Nav2Item
