import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CreatePage() {

  const { register, handleSubmit, reset } = useForm();
  const notify = () => toast("Data Submitted!")

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/products', data)
      console.log(`Submitted data ${data}`)
      console.log(res.data)
      // alert(`Submitted data ${data}`)
      reset()
    } catch (error) {
      console.log(` ${error} There is some error`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Enter Product Name</label>
      <input {...register("p_name")} />
      <br />
      <label>Enter Product Price</label>
      <input {...register("price")} />
      <br />
      <label>Enter Product Description</label>
      <textarea {...register("description")} />
      <br />
      <input type="submit" onClick={notify}/>
      <ToastContainer/>


    </form>
  )
}

export default CreatePage
