import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Vans from '../pages/VansPage/VansPage'
import { server } from '../config/server'


export default function RoutePages() {
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/vans' element={<Vans/>}/>
<Route path='/vans/:id' element={<Home/>} />

</Routes>
  )
}
