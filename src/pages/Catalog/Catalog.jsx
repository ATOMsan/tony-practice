import React, {useState, useEffect} from 'react'
import './Catalog.scss'
import axios from "axios";
import { Input } from '@material-ui/core';


const Catalog = () => {
    const [data,setData] = useState([]);
    const [string,setString] = useState('');
    const fetchData = async () =>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            setData(response.data)
        }catch(e){
           return console.log(e)
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[])

    console.log(data)

    const searchChangeItem = (e) => {
        setString(e.target.value);

    }
    const filterData = (query) =>{
        return query ? data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())) : data;
    }
    return (
        <div>
                <div className="catalog__search">
                    <form action="">
                        <Input 
                        placeholder="search" 
                        onChange={(e)=> {
                            searchChangeItem(e);
                        }}
                        />
                        
                    </form>
                </div>

                <div className="catalog__container">
                    {
                        filterData(string).map(item => (
                            <div key={item.id}>
                                <h2 >{item.title}</h2>
                                <a href={`/posts/${item.id}`}>reade more</a>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Catalog;
