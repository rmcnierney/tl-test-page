import React, { Component } from 'react'
import BlogPost from './blog-post/BlogPost'
import './body.css'
import './ad-slots/ad-slots.css'

// blog posts
import blogData from '../data/data'

// ad-slots
import AdLeaderboard from './ad-slots/Ad-leaderboard'
import AdNative from './ad-slots/Ad-native'

class Body extends Component {
    render() {
        return (
            <div id="body">
                <AdLeaderboard />
                <div id="blog-post-grid">
                    {
                        blogData.map(post => {
                            if (post.id === 3) return <AdNative key='ntv-1'/>
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
