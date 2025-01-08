import React, { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TbXboxXFilled } from "react-icons/tb";

const Viewtask = () => {
  var data = JSON.parse(localStorage.getItem("data"));
  const [carddata, setcarddata] = useState(data);
  const [modalId, setModalId] = useState(null); 
  const [statusValue, setStatusValue] = useState(""); 

  const deleteTask = (id) => {
    const filteredTasks = carddata.filter((item) => item.id !== id);
    setcarddata(filteredTasks);
      localStorage.setItem("data", JSON.stringify(filteredTasks));
  };
  const onchange = (e) => {
    setStatusValue(e.target.value);
  };
  const handleModal = (id) => {
    setModalId(id);
    const taskToEdit = carddata.find((task) => task.id === id);
    setStatusValue(taskToEdit ? taskToEdit.task_status : "");
  };

  const updateTaskStatus = () => {
    const updatedTasks = carddata.map((task) => {
      if (task.id === modalId) {
        return { ...task, task_status: statusValue };  
      }
      return task;
    });
    setcarddata(updatedTasks); 
    localStorage.setItem("data", JSON.stringify(updatedTasks));
    setModalId(null); 
  };
console.log(carddata);

  return (
    <>
      <div className="create-task custom-padding w-80 ">
        <h4 className="text-32 fw-semibold text-start">View Task</h4>
        <div className="d-flex  custom-margin flex-991-column">
          {carddata.length > 0 ? (
            carddata.map((item, index) => (
              <div
                className="custom-card-width task-card mx-1 position-relative d-flex flex-column gap-1"
                key={index + 1}
              >
                <p className="task-name fw-bold mb-0 custom-margin-bottom">
                  {item.task_name}
                </p>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <p className="priority mb-0 custom-margin-bottom text-capitalize">
                    {item.priority}
                  </p>
                  <p className="priority mb-0 custom-margin-bottom text-capitalize">
                    <span className="text-dark">Status</span>:{" "}
                    <span className="fw-bold"> {item.task_status}</span>
                  </p>
                </div>
                <p className="f-20  mb-0 custom-margin-bottom">
                  {item.description}
                </p>
                <p className="f-20  mb-0 custom-margin-bottom">
                  <span className="text-dark"> Assigned To</span> -{" "}
                  {item.assign_to}
                </p>
                <p className="f-20  mb-0 custom-margin-bottom">
                  <span className="text-dark"> Start Date</span> -{" "}
                  {item.start_date}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="f-20  mb-0 custom-margin-bottom">
                    <span className="text-dark"> End Date </span>-{" "}
                    {item.end_date}
                  </p>
                  <MdOutlineDeleteForever
                    className="fs-3 pointer"
                    onClick={() => deleteTask(item.id)}
                  />
                </div>

                <div className="edit-custom-position position-absolute">
                  <FaPen
                    className="text-dark pointer"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => handleModal(item.id)} 
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="fs-3 mt-4 fw-bold text-center">No Task Yet...</p>
          )}
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header d-flex justify-content-between">
                <h5 class="modal-title" id="exampleModalLabel">
                  Mark Task
                </h5>
                <TbXboxXFilled
                  className="fs-2 pointer"
                  data-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div class="modal-body">
                <form action="">
                  <div className="row flex-column p-1">
                    <label htmlFor="" className="fs-5 text-start">
                      Select task status
                    </label>
                    <select
                      className="form-select"
                      aria-label="Select task status"
                      value={statusValue} 
                      onChange={onchange}
                    >
                      <option value="" disabled selected>
                        Choose status
                      </option>
                      <option value="Completed">Completed</option>
                      <option value="Ongoing">Ongoing</option>
                      <option value="Not Done">Not Done</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary w-100"
                  onClick={updateTaskStatus}  
                  data-dismiss="modal"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewtask;
