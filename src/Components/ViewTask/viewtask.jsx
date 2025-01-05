import React from "react";
import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TbXboxXFilled } from "react-icons/tb";

const Viewtask = () => {
  var data = JSON.parse(localStorage.getItem("data"));
  const [modal, setmodal] = useState(false);
  const [carddata, setcarddata] = useState(data);
  const deleteTask = (id) => {
    const filteredTasks = carddata.filter((item) => item.id !== id);
    const val = confirm("Are Sure Want To Delete?");
    console.log(val);
    setcarddata(filteredTasks);
    localStorage.setItem("data", JSON.stringify(filteredTasks));
  };
  return (
    <>
      <div className="create-task  custom-padding w-75 ">
        <h4 className="text-32 fw-semibold text-start">View Task</h4>
        <div className="row custom-margin">
          {carddata.length > 0 ? (
            carddata.map((item, index) => (
              <div
                className="col-4 task-card mx-1 position-relative d-flex flex-column gap-1"
                key={index + 1}
              >
                <p className="task-name fw-bold mb-0 custom-margin-bottom">
                  {item.task_name}
                </p>
               <div className="d-flex justify-content-between">
               <p className="priority mb-0 custom-margin-bottom text-capitalize">
                  {item.priority}
                </p>
                <p className="priority mb-0 custom-margin-bottom text-capitalize">
                <span className="text-dark">Status</span>: <span className="fw-bold"> {item.status}</span>
                </p>
               </div>
                <p className="f-20  mb-0 custom-margin-bottom">
                  {item.description}
                </p>
                <p className="f-20  mb-0 custom-margin-bottom">
                 <span className="text-dark"> Assigned To</span> - {item.assign_to}
                </p>
                <p className="f-20  mb-0 custom-margin-bottom">
                 <span className="text-dark"> Start Date</span> - {item.start_date}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="f-20  mb-0 custom-margin-bottom">
                <span className="text-dark">    End Date </span>- {item.end_date}
                  </p>
                  <MdOutlineDeleteForever
                    className="fs-3 pointer"
                    onClick={() => deleteTask(item.id)}
                  />
                </div>

                <div className="edit-custom-position position-absolute">
                  <FaPen className="text-dark pointer" />
                </div>
              </div>
            ))
          ) : (
            <p className="fs-3 mt-4 fw-bold text-center">No Task Yet...</p>
          )}
        </div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

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
                <h5 class="modal-title " id="exampleModalLabel">
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
                    >
                      <option value="" disabled selected>
                        Choose status
                      </option>
                      <option value="completed">Completed</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="not_done">Not Done</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary w-100  "
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
