import React from 'react'
import Github from '../../../assets/github/github'

function SocialItem(props) {
    return (
        <a className="social_link" target="_blank" href={props.url}>
            <div className="social">
                {props.icon}
            </div>
        </a>
            
        
    )
}

export default SocialItem