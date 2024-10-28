import axios from 'axios'
import './AdminPost.css'
import AdminEdit from './AdminEdit';
import { useNavigate } from 'react-router-dom';

//single row in admin post table

function AdminPost(props:{id:string, Image:string, title:string, description:string, createdAt:Date, onDelete:()=>void}) {
    const usenavigate = useNavigate();
    function deletePost(){
        axios.delete(`https://65b80e0846324d531d55e7ce.mockapi.io/api/users/posts/${props.id}`).then(res=>{
            console.log(res);
            props.onDelete();
        })
    }

    function editPost(){
        usenavigate(`/admin/edit/${props.id}`)
    }

  return (
    <>
        
        <tr className="table-row">
            <td className="table-data">{props.id}</td>
            <td className="table-data"><img className="thumbnail-image" src={props.Image} alt="Example Image" /></td>
            <td className="table-data" style={{fontWeight:'600'}}>{props.title}</td>
            <td className="table-data" style={{fontSize:'13px'}}>{props.description}</td>
            <td className="table-data" style={{width:'12%'}}> {new Date(props.createdAt).toDateString()}</td>
            <td className="table-data"><button className="buttonEdit" onClick={editPost}>Edit</button></td>
            <td className="table-data"><button className="buttonRemove" onClick={deletePost}>Delete</button></td>
        </tr>
    </>
  )
}

export default AdminPost