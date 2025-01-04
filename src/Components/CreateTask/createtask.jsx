import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Add this import

const Createtask = () => {
  const initialValues = {
    task_name: '',
    description: '',
    assign_to: '',
    priority: "",
    start_date: '',
    end_date: '',
  };
  const [data, setdata]= useState([])
 
  const onSubmit = (values, {resetForm}) => {
  setdata(prevData => [...prevData, values]);
    resetForm();
    toast.success('Task created successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setdata(storedData);
    }
  }, []); 
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]); 
 
  
  console.log(data);
  
  const validate = (values) => {
    const err = {}
    if (!values.task_name) {
      err.task_name = 'Task Name is required'
    }
    if (!values.description) {
      err.description = 'Description is required'
    }
    if (!values.assign_to) {
      err.assign_to = 'Assign to is required'
    }
    if (!values.priority) {
      err.priority = 'Priority is required'
    }
    if (!values.start_date) {
      err.start_date = 'Start Date is required'
    }
    if (!values.end_date) {
      err.end_date = 'End Date is required'
    }
    return err
  }

  return (
    <>
       <ToastContainer />
      <div className="create-task custom-padding w-75">
        <h4 className='text-32 fw-semibold text-start'>Create Task</h4>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className='custom-margin w-100'>
              <div className="d-flex flex-column">
                <label className='label-text fw-semibold text-24'>Task Name</label>
                <Field
                  type="text"
                  name="task_name"
                  placeholder="Name"
                  className="w-100 mt-2 p-2 px-4 custom-field-bg-color"
                />
                {touched.task_name && errors.task_name && 
                  <ErrorMessage name="task_name" component="div" className='err-state fw-bold' />
                }
              </div>

              <div className="d-flex flex-column mt-3">
                <label className='label-text fw-semibold text-24'>Enter Description</label>
                <Field
                  type="text"
                  name="description"
                  placeholder="Name"
                  className="w-100 mt-2 p-2 px-4 custom-field-bg-color"
                />
                {touched.description && errors.description &&
                  <ErrorMessage name="description" component="div" className='err-state fw-bold' />
                }
              </div>

              <div className="d-flex gap-5 mt-3">
                <div className="w-50">
                  <label className='label-text fw-semibold text-24'>Assign To</label>
                  <Field
                    type="text"
                    name="assign_to"
                    placeholder="Name"
                    className="w-100 mt-2 p-2 px-4 custom-field-bg-color"
                  />
                  {touched.assign_to && errors.assign_to &&
                    <ErrorMessage name="assign_to" component="div" className='err-state fw-bold' />
                  }
                </div>
                <div className="w-50">
                  <label className='label-text fw-semibold text-24'>Priority</label>
                  <Field
                    as="select"
                    name="priority"
                    className="w-100 mt-2 p-2 px-4 custom-field-bg-color"
                  >
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Field>
                  {touched.priority && errors.priority &&
                    <ErrorMessage name="priority" component="div" className='err-state fw-bold' />
                  }
                </div>
              </div>

              <div className="d-flex gap-5 mt-3">
                <div className="w-50">
                  <label className='label-text fw-semibold text-24'>Start Date</label>
                  <Field
                    type="date"
                    name="start_date"
                    className="w-100 mt-2 p-2 px-4 custom-field-bg-color"
                  />
                  {touched.start_date && errors.start_date &&
                    <ErrorMessage name="start_date" component="div" className='err-state fw-bold' />
                  }
                </div>
                <div className="w-50">
                  <label className='label-text fw-semibold text-24'>End Date</label>
                  <Field
                    type="date"
                    name="end_date"
                    className="w-100 mt-2 p-2 px-4 custom-field-bg-color"
                  />
                  {touched.end_date && errors.end_date &&
                    <ErrorMessage name="end_date" component="div" className='err-state fw-bold' />
                  }
                </div>
              </div>

              <button
                type="submit"
                className='w-100 mt-4 btn-color'
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Createtask