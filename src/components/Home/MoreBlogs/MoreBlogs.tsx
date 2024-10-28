import React from 'react'
import { FaPenNib } from "react-icons/fa";
import './MoreBlogs.css'
import { Link } from 'react-router-dom';
import { PostType } from '../../types/post.types';
import PostCard from '../../PostCard/PostCard';
function MoreBlogs(props: { posts: PostType[]}) {
  return (
    <section className='moreBlogs'>
        <div className='sectionTitleWrap'>
            <FaPenNib color='orange' className='sectionIcon'/>
            <h2 className='sectionTitle'>Other blogs</h2>
        </div>
        <div className="blog">
        <div className="blog_wrapper">
          {/* Check if there are more than special count of posts */}
          {props.posts.length>3 ? (
            <PostCard {...props.posts[3]} />
          ):<></>}
          {props.posts.length>4 ? (
            <PostCard {...props.posts[4]} />
          ):<></>}
          {props.posts.length>5 ? (
            <PostCard {...props.posts[5]} />
          ):<></>}
        </div>
    <div className="blog_button"><Link to="/blogs">See all blogs</Link></div>
      </div>
    </section>
  )
}

export default MoreBlogs