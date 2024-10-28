import React, { useEffect } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

interface userType{
    username: string
    password: string
}

function Login() {
    
    const usenavigate = useNavigate();
    
    useEffect(()=>{
        let userStorage = sessionStorage.getItem('username');
        if(userStorage!=null){
            usenavigate('/admin');
        }
    },[])
    
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState('');
    
    
    function onUsernameChange(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function onPasswordChange(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    async function submitDataHandler(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(validate()){
            try {
                const response = await axios.get('https://65be8c26dcfcce42a6f2a73b.mockapi.io/api/adminUser/user');
                const users = response.data;
          
            
                const user = users.find((user:userType) => user.username === username);
          
        
                if (user && user.password === password) {
                  
                  console.log('Login successful');
                
                  sessionStorage.setItem('username',String(username));
                  usenavigate('/admin');
                } else {
                  setError('Invalid username or password');
                }
              } catch (error) {
                console.error('Error:', error);
                setError('An error occurred. Please try again later.');
              }
              setPassword('');
              setUsername('');
        }
    }

    function validate(){
        // Validate if username and password are not empty
        let result = true;
        if(username === '' || username===null){
            result= false
            alert("Type username ");
        }
        if(password==='' || password===null){
            result=false
            alert("Type password");
        }
        return result
    }
  return (
    
    <div className="login-page">
        {error && <div style={{textAlign:'center' }}>{error}</div>}
        <div className="form">
            <form className="login-form" onSubmit={submitDataHandler}>
                <input type="text" placeholder="username" onChange={(e)=>onUsernameChange(e)} value={username}/>
                <input type="password" placeholder="password" onChange={(e)=>onPasswordChange(e)} value={password}/>
                
            <button>login</button>
        </form>
        <Link to='/' style={{textDecoration:'none'}}><p style={{marginTop:'30px', color:'black', fontSize:'15px'}}>Back Home</p></Link>
        </div>
        
    </div>
  )
}

export default Login