import { useEffect, useState } from 'react';
import { Route,Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminPost from './AdminPost/AdminPost';
import { PostType } from './AdminPost/AdminEdit';
import './Admin.css'
function Admin() {
    // fetching data for api then displaying it in the table
    const usenavigate = useNavigate();
    const [blogs, setBlogs] = useState<PostType[]>();
    
    useEffect(()=>{
      //checking if the user is logged in if not redirecting to login page
        let username = sessionStorage.getItem('username')
        if(username==='' || username===null){
            usenavigate('/login');
        }
        else{
          axios.get('https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts').then(res=>{
            console.log(res.data);
            setBlogs(res.data);
          })
        }
    },[])

    function handlePostDeletion(){
      axios.get('https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts').then(res=>{
        console.log(res.data);
        setBlogs(res.data);
      })
    } 

    function addNew(){
      usenavigate('/admin/addNew');
    }
  return (
    <div>
      <div className='adminButtons'>

      
        <button onClick={()=>{sessionStorage.clear(); usenavigate('/')} } className='adminButton'>Logout</button>
        <button onClick={addNew} className='adminButton'>Pridat novy</button>
        <button onClick={()=>usenavigate('/')} className='adminButton'>Domu</button>
      </div>
      
      <div className="admin-blog-table">
            <table className="table">
                <thead>
                <tr>
                    <th className="table-header">ID</th>
                    <th className="table-header">Image</th>
                    <th className="table-header">Title</th>
                    <th className="table-header">Description</th>
                    <th className='table-header'>Published</th>
                    <th className="table-header">Edit</th>
                    <th className="table-header">Delete</th>
                </tr>
                </thead>
                <tbody>
                  
             
      {
        blogs?.map(item=>(

          <AdminPost id={item.id ?? ''} title={item.title} description={item.description} createdAt={item.createdAt} Image={item.Image} key={item.id} onDelete={handlePostDeletion}></AdminPost>
        ))
      } 
         </tbody>
            </table>
        </div> 
    </div>
  )
}

export default Admin