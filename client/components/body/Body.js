import React, { Component } from 'react'
import BlogPost from './blog-post/BlogPost'
import './body.css'
import './ad-slots/ad-slots.css'

// blog posts
import blogData from '../data/data'

// ad-slots
import AdLeaderboard from './ad-slots/Ad-leaderboard'

class Body extends Component {

    componentDidMount() {
        const script = document.createElement('script')
        script.src = '//ib.3lift.com/ttj?inv_code=ryan_test_infeed'
        script.async = true
        const parentNode = document.querySelector('#blog-post-grid')
        const refNode = document.querySelector('#blog-post:nth-of-type(5)')
        
        // insert the script
        parentNode.insertBefore(script, refNode)
    }

    render() {
        return (
            <div id="body">
                <AdLeaderboard />
                <div id="blog-post-grid">
                    {
                        blogData.map(post => {
                            return (
                                <BlogPost key={post.id} data={post}/>
                            )
                        })
                    }
                </div>  
            </div>
        )
    }    
}

export default Body
