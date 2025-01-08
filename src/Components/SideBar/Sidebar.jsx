import React from 'react'
import logo from "../../assets/images/logo.png"
import "../../../src/index.css"
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light bg-sidebar-color width-20 h-100vh" >
      <div className="d-flex justify-content-center align-items-center">
      <img src={logo} className='text-center w-75 ' alt ="Logo" title='Logo' />
      </div>
      <ul className="nav nav-pills flex-column mb-auto mt-4">
       <Link className='text-decoration-none' to = "/">
       <li className="nav-item fw-bold text-center text-size-20 nav-link active pointer">
          Create Task 
        </li></Link>
   <Link className='text-decoration-none' to = "/viewtask">
   <li className="nav-item  text-center text-size-20 mt-3 pointer">
        View Task
        </li></Link>
       
      </ul>
    </div>
  )
}

export default Sidebar