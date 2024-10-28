//Navigeting to single post page using react-router-dom and fetching data from mockapi
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';
import './SinglePost.css';
import { IoIosUndo } from "react-icons/io";
import Skeleton from '../Skeleton/Skeleton';
import NotFound from '../NotFound/NotFound';
interface PostType {
    id: string;
    title: string;
    description: string;
    Image: string;
    createdAt: Date;

}
function SinglePost() {

    const {id}= useParams();
    const [singlePost, setSinglePost ] = useState<PostType | null>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/${id}`).then(res=>{
            console.log(res.data);
            setSinglePost(res.data);
            setIsLoading(false);
        }).catch(error =>{
            console.log(error);
            setSinglePost(null);
            setIsLoading(false);
        })
    },[])
    
  return (
    <div>
        <div className='singlePostWrap'>

        
        {
            isLoading ? (<Skeleton/>):(
            singlePost === null ? (<NotFound/>
            ):(
                <>
                    

                    <div className='blogWrap'>
                        <img src={singlePost?.Image} className='imageBlogPost'></img>
                        <h1 className='singleTitlePost'>{singlePost?.title}</h1>
                        <p className='singleDescrPost'>{singlePost?.description}</p>

                    </div>
                </>
            )) 
        }
        </div>
    </div>
  )
}

export default SinglePost;