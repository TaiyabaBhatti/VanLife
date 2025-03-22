import React, { useEffect, useState } from 'react'
import Button from '../../components/ui/Button'

import { useNavigate} from 'react-router-dom'
import Axios from 'axios'



export default function VanCard() {

  const navigate = useNavigate();

const [vansData,setVansData] = useState(null);

const handleClick = (id) =>{

  navigate(`/vans/${id}`)

}
useEffect(()=>{

const fetchedData = Axios.get("/api/vans").then((res)=>{ setVansData(res.data.vans)})
},[])




  return (

    vansData &&
    vansData.map((van)=>{
    
    return (
      
<div className='space-y-3 w-64 cursor-pointer'  onClick={()=> handleClick(van.id)}>
<img src={van.imageUrl} alt="" className='rounded-md size-64 object-cover' />
      <div className=' text-salete flex flex-row gap-5 justify-between items-center'>
        <h1 className='font-semibold text-[20px] '>{van.name}</h1>
        <p><span className='text-[20px] font-semibold'>${van.price}</span><span className='text-[14px] font-normal'>/day</span></p>
      </div>

<Button text={van.type} bgColor='bg-orange-500'/>

    </div>
    
    )
    }
    )
    
  )
}
