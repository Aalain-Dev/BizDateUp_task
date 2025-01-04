import React from "react";
import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

const Viewtask = () => {
  var data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  
  const [carddata, setcarddata] = useState(data);
  const deleteTask = (id) => {
    const filteredTasks = carddata.filter((item) => item.id !== id);
    setcarddata(filteredTasks);
    localStorage.setItem("data", JSON.stringify(filteredTasks));
  };
  return (
    <>
      <div className="create-task custom-padding w-75">
        <h4 className="text-32 fw-semibold text-start">View Task</h4>
        <div className="row">
          {carddata.map((item, index) => (
            <div
              className="col-4 task-card mx-1 position-relative"
              key={index + 1}
            >
              <p className="task-name fw-bold mb-0 custom-margin-bottom">
                {item.task_name}
              </p>
              <p className="priority mb-0 custom-margin-bottom text-capitalize">
                {item.priority}
              </p>
              <p className="f-20  mb-0 custom-margin-bottom">
                {item.description}
              </p>
              <p className="f-20  mb-0 custom-margin-bottom">
                Assigned To - {item.assign_to}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="f-20  mb-0 custom-margin-bottom">
                  End Date - {item.end_date}
                </p>
                <MdOutlineDeleteForever
                  className="fs-3 pointer"
                  onClick={() => deleteTask(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Viewtask;
