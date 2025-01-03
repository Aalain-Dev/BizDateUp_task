import React from 'react'
import logo from "../../assets/images/logo.png"
import "../../../src/index.css"

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light bg-sidebar-color width-280 h-100vh" >
      <div className="d-flex justify-content-center align-items-center">
      <img src={logo} className='text-center w-75 ' alt ="Logo" title='Logo' />
      </div>
      <ul className="nav nav-pills flex-column mb-auto mt-4">
          <li className="nav-item fw-bold text-center text-size-20 nav-link active pointer">
          Create Task 
        </li>
        <li className="nav-item  text-center text-size-20 mt-3 pointer">
        View Task
        </li>
        <li className="nav-item  text-center text-size-20 mt-3 pointer">
        Completed Task
        </li>
        <li className="nav-item  text-center text-size-20 mt-3 pointer">
        Remaining Task
        </li>
      </ul>
    </div>
  )
}

export default Sidebar