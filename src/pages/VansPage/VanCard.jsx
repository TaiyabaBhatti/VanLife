import React, { useEffect, useState } from 'react'
import Button from '../../components/ui/Button'
import vanImage from "../../assets/images/van.png"
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { server } from '../../config/server'
import Axios from 'axios'



export default function VanCard() {


const [vansData,setVansData] = useState(null);
const id = useParams()

const handleClick = (id) =>{

}
useEffect(()=>{

const fetchedData = Axios.get("/api/vans").then((res)=>{console.log(res.data.vans); setVansData(res.data.vans)})
},[])




  return (

    vansData &&
    vansData.map((van)=>{
    
    return (
      <Link to={`/vans/${id}`} key={van.id}>
<div className='space-y-3 w-64 '  onClick={()=> handleClick(van.id)}>
<img src={van.imageUrl} alt="" className='rounded-md size-64 object-cover' />
      <div className=' text-salete flex flex-row gap-5 justify-between items-center'>
        <h1 className='font-semibold text-[20px] '>{van.name}</h1>
        <p><span className='text-[20px] font-semibold'>${van.price}</span><span className='text-[14px] font-normal'>/day</span></p>
      </div>

<Button text={van.type} bgColor='bg-orange-500'/>

    </div>
    </Link>
    )
    }
    )
    
  )
}
