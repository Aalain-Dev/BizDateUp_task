import React from 'react'
import { useState } from 'react';

const Viewtask = () => {
  var modalId = JSON.parse(localStorage.getItem('data'));
const [carddata, setcarddata] = useState(modalId)  
console.log(carddata);

  return (
  <>
<div className='create-task custom-padding w-75'>
<h4 className='text-32 fw-semibold text-start'>View Task</h4>
<div className="row">
 {
  carddata.map((item,index)=>(
    <div className="col-4 task-card mx-1" key = {index + 1}>
    <p className='task-name fw-bold mb-0 custom-margin-bottom'>{item.task_name}</p>
    <p className='priority mb-0 custom-margin-bottom'>{item.priority}</p>
    <p className='f-20  mb-0 custom-margin-bottom'>{item.description}</p>
    <p className='f-20  mb-0 custom-margin-bottom'>Assigned To - {item.assign_to}</p>
    <p className='f-20  mb-0 custom-margin-bottom'>End Date - {item.end_date}</p>
  </div>
  ))
 }
</div>
</div>
    
  </>
  )
}

export default Viewtask