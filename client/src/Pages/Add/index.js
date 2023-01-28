import React from 'react'
import sekilli from './booking-01.jpg'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './style.scss';
import { toast, Toaster } from 'react-hot-toast';
const Index = () => {
  const formik = useFormik({
    initialValues: {
      name:'',
      price:'',
      desc: '',
      img:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less').min(4,'Must be 5 or more')
        .required('Required'),
     
        price: Yup.number()
        
        .required('Required'),
        desc: Yup.string()
        .max(15, 'Must be 15 characters or less').min(7,'Must be 5 or more')
        .required('Required'),
        img: Yup.string()
        .max(95, 'Must be 15 characters or less').min(3,'Must be 3 or more')
        .required('Required'),
    }),
    onSubmit: values => {
      toast.success('Successfully posted!')
      axios.post('http://localhost:8080/api/foods',values).then((res)=>console.log(res.data))
    },
  });
  return (
   <div className='formi'>
     <div style={{display:"flex" ,width:"100%",height:'600px',alignItems:"center",justifyContent:"space-around"}}>
    <form className='form' initialValues={{
        short: ''
      }} style={{width:"20%", display:"flex",flexDirection:"column",justifyContent:"space-between"}} onSubmit={formik.handleSubmit}>
      <label className='label' htmlFor="name">Name</label>
      <input
      style={{width:'300px',height:"30px"}}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Write Food name"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
<label htmlFor="name">desc</label>
      <input
      style={{width:'300px',height:"30px"}}
        id="desc"
        name="desc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.desc}
        placeholder="Write food Desc"
      />
      {formik.touched.img && formik.errors.img ? (
        <div>{formik.errors.img}</div>
      ) : null}
      <label htmlFor="price">Price</label>
      <input
      style={{width:'200px',textAlign:"center",height:"30px"}}
        id="price"
        
        name="price"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
placeholder="Write Food price"
      />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}
      <label htmlFor="name">Img</label>
      <input
      style={{width:'700px',height:"30px"}}
        id="img"
        name="img"
        type="img"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.img}
        placeholder="Food img link"
      />
      {formik.touched.img && formik.errors.img ? (
        <div>{formik.errors.img}</div>
      ) : null}
      <button  type="submit" >Submit</button>
      <Toaster/>
    </form>
    <img  src={sekilli}/>
    </div>
    
   </div>
  );
};
export default Index

