import React from 'react';
import './ProjectPreview.css'
import Description from './Description/Description';

// TODO change project preview URL when you host for real 
function ProjectPreview(props) {
    return (
        <a className={"project_preview " + props.display} target="_blank" href={props.url}>
            <div className="filter_backdrop" > 
                <Description title={props.title} stack={props.stack}/>
            </div>
            <img className="project" src={props.src} alt={"Picture of "  + props.title} />
        </a>
    )
}

export default ProjectPreview