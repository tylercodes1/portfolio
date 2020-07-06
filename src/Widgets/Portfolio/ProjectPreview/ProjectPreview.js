import React from 'react';
import './ProjectPreview.css'
import Description from './Description/Description';

// TODO change project preview URL when you host for real 
function ProjectPreview(props) {
    return (
        <a className="project_preview" target="_blank" href="https://tylersportfolio.netlify.app/">
            <div className="filter_backdrop" > 
                <Description />
            </div>
            <img className="project" src="Portfolio.PNG" alt="hello can't be loaded"/>
        </a>
    )
}

export default ProjectPreview