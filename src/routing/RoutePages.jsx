import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Vans from '../pages/VansPage/VansPage'
import { makeServer } from "./config/server2";
import VanDetails from '../pages/VansPage/VanDetails'

makeServer();
export default function RoutePages() {
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/vans' element={<Vans/>}/>
<Route path='/vans/:id' element={<VanDetails/>} />
</Routes>
  )
}
