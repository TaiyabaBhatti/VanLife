import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/ui/Wrapper'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/ui/Button'
import vanImage from "../../assets/images/van.png"
import  Axios  from 'axios'


export default function VanDetails() {

const [vanData,setVanData] = useState(null);
const params = useParams();

    useEffect(()=>{

        const fetchedData = Axios.get(`/api/vans/${params.id}`).then((res)=>{console.log(params); setVanData(res.data.vans)});


       


        },[])
        
  return (
   <Wrapper className="mb-10 mt-14 min-h-screen">

<Link to="/vans" className="underline text-black font-base ">Back to all vans</Link>


 {vanData ? <div className='space-y-3 mt-10'>
<img src={vanData.imageUrl} alt="" className='mb-10 rounded-md object-cover'/>
<Button text={vanData.type} bgColor='bg-orange-500'/>
<h1 className='font-semibold text-[20px] '>{vanData.name}</h1>
<p><span className='text-[20px] font-semibold'>${vanData.price}</span><span className='text-[14px] font-normal'>/day</span></p>

<p className='text-base font-medium'>{vanData.description}</p>
<Button text={"Rent this van"} bgColor='bg-orange-500' className='w-full'/>
</div>

:  

<p className='text-base text-center mt-12 text-gray-500'>Loading....</p>
}




   </Wrapper>
  )
}
