import React, {useState,useEffect} from "react";
import axios from "axios";
import "./Posts.scss";
import { useLocation, useHistory} from 'react-router-dom';




const Post = () => {
    let history = useHistory();
    const [data,setData] = useState({});
    const location = useLocation();
    const fetchData = async () =>{
        const itemId = location.pathname.replace("/posts/", "");
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
            console.log(response)
            setData(response.data)
        }catch(e){
           return console.log(e)
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[])

    function handleClick() {
        history.goBack();
      }
    return (
        <div className="posts__body">
            <button type="button" onClick={handleClick}>
            Go Back
            </button>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}


export default Post;