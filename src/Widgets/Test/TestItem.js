import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function TestItem(props) {

    return (
        <Link to={"/" + props.link} onClick={() => props.onClick(props.link)}>
            <div className={"item3"}>
                <h1>{props.link}</h1> 
                <div className={"back2"  + (props.link === props.active ? ' selected': '')}></div>
            </div>
        </Link>
    )
}

export default TestItem