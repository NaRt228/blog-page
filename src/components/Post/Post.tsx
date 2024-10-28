import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'
import { PostType } from '../types/post.types'
function Post(props:PostType) {
  return (
    <div className="post">
      <img className="postImg" src={props.Image} alt="post" />
      <div className="postInfo">

          <Link to={`post/${props.id}`}><span className="postTitle">{props.title}</span></Link>
    
        <hr />
        <span className="postDate">
        {new Date(props.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{props.description}</p>
    </div>
  )
}

export default Post