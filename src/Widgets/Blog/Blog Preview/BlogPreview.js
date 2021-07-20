import React from 'react'

import './BlogPreview.css'

const BlogPreview = ({title, display, src}) => {
    return (
        <div className={"blog_preview " + display} onClick={() => console.log("blogp")}>
            <div className="blog_backdrop">{title}</div>
            <img className="blog_img" src={src} alt={title} />
        </div>
    )
}

export default BlogPreview
