import React, { useEffect, useState } from 'react'
import './LatestBlogs.css'
import { ImBook } from "react-icons/im";
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';


import { PostType } from '../../types/post.types'
let heightOfimage = '100'
function LatestBlogs(props: { posts: PostType[] }) {
    return (
        <section className='latestWrap'>
            <div className='latestTitleWrap'>
                <ImBook color='orange' className='latestIcon' />
                <h2 className='latestTitle'>Latest Blogs</h2>
                <FaPencilAlt color='orange' className='latestIcon' />
            </div>

            <div className='threeBlogs'>
                {/* Check if there are special count posts */}
                {props.posts.length > 0 ? (<Link to={`post/${props.posts[0].id}`}>
                    <div className='BlogContainer' style={{ height: '520px', alignSelf: 'stretch' }}>
                        <img src={props.posts[0].Image} className='newestBlog' style={{ height: '520px' }} alt='latest-blog'></img>
                        <div className='newestBlogText'>
                            <h2 className='newestBlogTitle'>{props.posts[0].title}</h2>
                            <p className='newestBlogDescription'>{props.posts[0].description}</p>
                        </div>
                    </div>
                </Link>)
                    : <p>There is no blogs now</p>}

                <div className='otherNewestWrap'>
                    {props.posts.length > 1 ? (<Link to={`post/${props.posts[1].id}`}>
                        <div className='BlogContainer' style={{ height: '250px' }}>
                            <img src={props.posts[1].Image} className='otherNewest' style={{ height: '250px' }} alt='latest-blog'></img>
                            <div className='otherBlogText'>
                                <h2 className='otherBlogTitle'>{props.posts[1].title}</h2>
                                <p className='otherBlogDescription'>{props.posts[1].description}</p>
                            </div>
                        </div>
                    </Link>) : <></>}

                    {props.posts.length > 2 ? (<Link to={`post/${props.posts[2].id}`}>
                        <div className='BlogContainer' style={{ height: '250px' }}>
                            <img src={props.posts[2].Image} className='otherNewest' style={{ height: '250px' }} alt='latest-blog'></img>
                            <div className='otherBlogText'>
                                <h2 className='otherBlogTitle'>{props.posts[2].title}</h2>
                                <p className='otherBlogDescription'>{props.posts[2].description}</p>
                            </div>
                        </div>
                    </Link>) : <></>}
                </div>
            </div>


        </section>
    )
}

export default LatestBlogs