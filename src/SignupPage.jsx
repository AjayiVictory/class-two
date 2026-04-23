import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'


const SignupPage = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            // alert("You have submitted")
            console.log(values)
            axios.post('http://localhost:5555/user/register', values)
                .then(response => {
                    // alert('Form submitted successfully')
                    navigate('/login')
                })
                .catch(error => {
                    console.error('Error submitting form:', error)
                })
        },
        validationSchema: yup.object({
            firstName: yup.string().required('First name is required'),
            lastName: yup.string().required('Last name is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
            password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        })
    })


  return (
    <>
    <h1>Signup Page</h1>
    <form onSubmit={formik.handleSubmit}>
        <input className="d-block mb-1"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.firstName ? <p className="text-danger fs-6">{formik.errors.firstName}</p> : ""}

        <input className="d-block mb-1"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.lastName ? <p className="text-danger fs-6">{formik.errors.lastName}</p> : ""}

        <input className="d-block mb-1"
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? <p className="text-danger fs-6">{formik.errors.email}</p> : ""}

        <input className="d-block mb-1"
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? <p className="text-danger fs-6">{formik.errors.password}</p> : ""}

        <button type="submit" >Sign Up</button>
    </form>
    </>
  )
}

export default SignupPage