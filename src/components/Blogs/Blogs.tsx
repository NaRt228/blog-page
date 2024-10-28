import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../UI/Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '../UI/Footer/Footer'
import './Blogs.css'
import { PostType } from '../types/post.types'
import PostCard from '../PostCard/PostCard'

function Blogs() {
    //fetching the posts from the api
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts').then((response) => {
            setPosts(response.data)
        })
    }, [])
    console.log(posts)
    return (
        <>
            <main className='blog' style={{ marginTop: '75px' }}>
                <div className='blog_wrapper'>
                    {
                        posts.map((post: PostType) => {
                            return (
                                <PostCard key={post.id} {...post} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Blogs