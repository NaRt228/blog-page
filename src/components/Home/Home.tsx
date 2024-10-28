// import React from 'react'
// import { Link,Route,Routes,BrowserRouter } from 'react-router-dom';
// import User from '../Assets/Images/User.png'
import './Home.css'
import Header from '../UI/Header/Header';
import Hero from '../UI/Hero/Hero';
import LatestBlogs from './LatestBlogs/LatestBlogs';
import MoreBlogs from './MoreBlogs/MoreBlogs';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Footer from '../UI/Footer/Footer';
import { PostType } from '../types/post.types';


function Home() {
  const [posts, setPosts] = useState<PostType[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      axios.get("https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts").then(res =>{
          console.log(res.data);
          setPosts(res.data.reverse());
          setIsLoading(false)
      })
      
  },[])
  return (
    <>
      <main>
      <Hero></Hero>
      {
        posts? <LatestBlogs posts ={posts}></LatestBlogs> : <div>Loading...</div>
      }
      {
        posts? <MoreBlogs posts ={posts}></MoreBlogs> : <div>Loading...</div>
      }
      </main>
    </>
  )
}

export default Home;