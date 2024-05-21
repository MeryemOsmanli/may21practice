import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

function Detail() {
    const {id}=useParams()
    const [detail,setDetail]=useState([])
    useEffect(() => {
        onedetail()
      }, []);
    async function getdetail(id) {
        const response = await fetch('http://localhost:3000/meryem/'+id);
        const data = await response.json();
        return data
    
      }
      async function onedetail() {
        let products= await getdetail(id)
        setDetail(products)
        
      }
  return (
    
    <div>
           <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <img src={detail.image} alt="" />
        <h3>{detail.title}</h3>
        <p>{detail.desc}</p>
        <span>{detail.price}</span>
      
    </div>
  )
}

export default Detail
