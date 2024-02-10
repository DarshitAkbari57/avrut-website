import React, { useState } from "react";
import { BsHouse, BsPhone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineHouse } from "react-icons/md";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AiOutlineMail } from "react-icons/ai";

function Getintouch() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    message: Yup.string().required('Message is required'),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });


  return (
    <div id="contact" className="container mx-auto p-1 md:p-5 max-w-5xl rounded-2xl border shadow-xl my-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-transparent p-3 md:p-10 text-black">
          <p className="text-sm leading-7 font-regular capitalize">Contact us</p>
          <h3 className="text-4xl font-extrabold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h3>
          <p className="mt-4 leading-7">
            Please inform us about your project, and we'll get back to you as soon as possible.
          </p>
          <div className="flex items-center mt-5 gap-4 ">
            <div className="w-5">
              <BsHouse className="" />
            </div>
            <span className="text-sm">309, Amby valley arcade, VIP Circle, Uttaran, Surat-394105</span>
          </div>
          <div className="flex items-center mt-5 gap-4">
            <div className="w-5">
              <AiOutlineMail />
            </div>
            <span className="text-sm">Email: info@avrut.com</span>
          </div>
          <div className="flex items-center mt-5 gap-4">
            <div className="w-5">
              <BsPhone />
            </div>
            <span className="text-sm">Phone: +91 97126 97297</span>
          </div>
        </div>
        <form method="post" className="p-1 md:p-5" onSubmit={formik.handleSubmit}>
          <div className="w-full px-3 mb-3">
            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-primary ${formik.errors.name && formik.touched.name ? 'border-red-500' : ''
                }`}
              id="name"
              type="text"
              placeholder="Name"
              {...formik.getFieldProps('name')}
            />
            <span className="text-red-500">{formik.errors.name}</span>
          </div>
          <div className="w-full px-3 mb-3">
            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary ${formik.errors.email && formik.touched.email ? 'border-red-500' : ''
                }`}
              id="email"
              type="email"
              placeholder="Email address"
              {...formik.getFieldProps('email')}
            />
            <span className="text-red-500">{formik.errors.email}</span>
          </div>
          <div className="w-full px-3 mb-3">
            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
              Mobile number
            </label>
            <input
              className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary ${formik.errors.mobile && formik.touched.mobile ? 'border-red-500' : ''
                }`}
              id="mobile"
              type="text"
              placeholder="Mobile number"
              {...formik.getFieldProps('mobile')}
            />
            <span className="text-red-500">{formik.errors.mobile}</span>
          </div>
          <div className="w-full px-3 mb-3">
            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              rows={5}
              className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary ${formik.errors.message && formik.touched.message ? 'border-red-500' : ''
                }`}
              id="message"
              placeholder="Message"
              {...formik.getFieldProps('message')}
            ></textarea>
            <span className="text-red-500">{formik.errors.message}</span>
          </div>
          <div className="flex justify-end w-full px-3">
            <button
              className="shadow bg-primary transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Getintouch;
