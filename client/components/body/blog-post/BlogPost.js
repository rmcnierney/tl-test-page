import React from 'react'
import './blog-post.css'

const BlogPost = (props) => {
    // props coming in
    const { id, url, img, title, dateUpdated, content } = props.data 
    return (
        <div id="blog-post">
            <div id="blog-post-img">
                <img src={img} alt={id} />
            </div>
            <div id="blog-post-title">
                <p>{title}</p>
            </div>
            <div id="blog-post-date">
                <time>{dateUpdated}</time>
            </div>
            <div id="blog-post-content">
                <p>{content}</p>
            </div>
            <div id="blog-post-readMore">
                <span>Read More</span>
            </div>
        </div>
    )
}

export default BlogPost
