import React from 'react'
import { PostType } from '../types/post.types'
import { Link } from 'react-router-dom'
import './PostCard.css'
const PostCard = (props: PostType) => {
  return (

      <article className='blog_item'>
        <Link to={`/post/${props.id}`}>
          <div className='bi_img'><img src={props.Image} alt='blog'></img></div>
          <div className='bi_title'>{props.title}</div>
          <div className='bi_content' style={{ textAlign: 'center' }}>{props.description}</div>
          <div className='reading_time'>{new Date(props.createdAt).toDateString()}</div>
        </Link>
      </article>

  )
}

export default PostCard
