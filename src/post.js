import {Component} from 'react';
import {
    Link
  } from "react-router-dom";

class Post extends Component {
    /* defines how posts look in home page */
    createPost = post => {
        return (
            <div className="post" key={post.key}>
                <Link to={post.link} onClick={this.props.goBolt}><div className="postText">
                    <div className="description">
                        <h3 className="postTitle">{post.title}</h3>
                        <p style={{lineHeight: '25px', margin: 0,}}><span className="subjText">{post.subject}</span><span className="formText">{post.format}</span></p>
                        <div className="description"><p className="descText"><span className="hilight">{post.desc}</span></p></div>
                    </div>
                </div></Link>
                <img src={post.photo} alt="visual of product" className="photo"></img>
            </div>
        )
    }    
    render () {
        let posts = this.props.posts
        // filter posts by subject and format
        posts = (this.props.subject !== 'all')? posts.filter(post => post.subject === this.props.subject) : posts
        posts = (this.props.format !== 'all')? posts.filter(post => post.format === this.props.format) : posts
        // sort posts by price or most recent first
        posts = (this.props.sort === 'date (newest)')? posts.sort(function(a, b){return new Date(b.date) - new Date(a.date)}) : (this.props.sort === 'date (oldest)')? posts.sort(function(a, b){return new Date(a.date) - new Date(b.date)}): posts.sort(function(a, b){return a.key - b.key})
        const content = posts.map(this.createPost)
        return (
            content
        )
    }
}

export default Post;