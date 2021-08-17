import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';

const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
    headers: {
      'x-rapidapi-key': 'af24999ff3msh22e1a85435742a2p11d759jsn7793ee82e1d7',
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  };

const headers = {
    'x-rapidapi-key': 'af24999ff3msh22e1a85435742a2p11d759jsn7793ee82e1d7',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }

const Coin = (props) => {

    const [data,setData] = useState([]);
    const [link,setLinks] = useState([]);
    const [offset,setOffset] = useState({});
    const fetchData = async (link = '/v1/geo/countries') =>{
        try{
            const resp = await axios.get(
                `https://wft-geo-db.p.rapidapi.com${link}`,
                {
                    headers
                }
            );
            setData(resp.data.data)
            setLinks(resp.data.links)
            setOffset(resp.data.metadata);
            console.log(resp);
        }  catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchData();
    } ,[])

    const changePage = (e) =>{
        return fetchData(e);
    }

    const trackOffset = (index, e) =>{
        if (index === 0 && e.currentOffset === 0){
            return true  
        }else if(link[index].rel === "last" && e.currentOffset === e.totalCount-4){
            return true
        } else {
            return false
        }
        
    }

    return (
        <div>
           
            <ul>
                {
                    data.map((item,index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
            <div className="dataNav">
                {
                    link.map((item, index) =>(
                        <Button key={index} variant="contained" disabled={trackOffset(index, offset)} color="primary" onClick={()=>{
                            changePage(item.href)
                        }}>
                            {item.rel}
                        </Button>   
                    ))
                }
            </div>
            
        </div>
    )
}

export default Coin;
