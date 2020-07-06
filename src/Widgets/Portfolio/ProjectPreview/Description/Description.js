import React from 'react'
import './Description.css'
import ReactLogo from '../../../../assets/react/ReactLogo'
import JavaScriptLogo from '../../../../assets/react/JavaScriptLogo'

function Description() {
    return (
        <div className="description_view">
            <h1>Portfolio</h1>
            <div className="logo_container">
                <ReactLogo />
                <JavaScriptLogo />
            </div>
        </div>
    )
}

export default Description