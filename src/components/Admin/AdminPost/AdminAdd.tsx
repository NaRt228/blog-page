import React from 'react'
import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PostType } from './AdminEdit';

function AdminAdd() {
    const usenavigate = useNavigate()
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<Date>();
    const [image, setImage] = useState<string>('');

    function changeTitle(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTitle(e.target.value);
      }
      function changeDescription(e:React.ChangeEvent<HTMLTextAreaElement>){
        setDescription(e.target.value);
      }
      function changeImage(e:React.ChangeEvent<HTMLInputElement>){
        setImage(e.target.value);
      }
      function changePost(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const postObject: PostType={
          title: title,
          description: description,
          Image: image,
          createdAt: new Date()
  
        }
        //adding a new post
        axios.post(`https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/`, postObject).then(res=>{
            console.log(res.data);
            usenavigate('/admin');
        })
  
          
      }

  return (
    //form for adding a new post
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', marginTop:'200px' }}>
      <form onSubmit={changePost} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <input type="text" value={title} onChange={changeTitle} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Title" />
        <br />
        <textarea cols={50} rows={20} style={{ resize: 'none', width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} value={description} onChange={changeDescription} placeholder="Description"></textarea>
        <br />
        <input type="text" value={image} onChange={changeImage} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Image URL" />
        <br />
        <div className='formButtons' style={{display:'flex', justifyContent:'space-between'}}>
        <button className='cancelButton' onClick={()=>usenavigate('/admin')} style={{ width: '50%', padding: '10px', backgroundColor: '#d24c45', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button> &nbsp;
        <input type="submit" value="Zmenit" style={{ width: '50%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
        </div>
      </form>
  </div>
  )
}

export default AdminAdd