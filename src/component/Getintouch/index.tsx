import React, { useState } from "react";
import { BsClock, BsHouse, BsPhone, BsWatch } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

function Getintouch() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.id]: '' // Clear error when the user starts typing
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Simple validation
    if (formData.name.trim() === '') {
      setErrors({
        ...errors,
        name: 'Name is required'
      });
      return;
    }

    if (formData.email.trim() === '') {
      setErrors({
        ...errors,
        email: 'Email is required'
      });
      return;
    }

    if (formData.message.trim() === '') {
      setErrors({
        ...errors,
        message: 'Message is required'
      });
      return;
    }

    // Perform form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div id="contact">
        <div className="container mx-auto p-2 md:p-5  max-w-5xl rounded-2xl border shadow-xl my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="bg-transparent p-3 md:p-10 text-black">
              <p className="mt-4 text-sm leading-7 font-regular capitalize">
                Contact us
              </p>
              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span className="text-primary">Touch</span>
              </h3>
              <p className="mt-4 leading-7 ">
                Please inform us about your project, and we&apos;ll get back to
                you as soon as possible.
              </p>

              <div className="flex items-center mt-5 gap-4">
                <BsHouse />
                <span className="text-sm">
                  309, Amby valley arcade, VIP Circle, Uttaran, Surat-394105
                </span>
              </div>
              <div className="flex items-center mt-5 gap-4">
                <MdOutlineEmail />
                <span className="text-sm">Email: info@avrut.com</span>
              </div>
              <div className="flex items-center mt-5 gap-4">
                <BsPhone />
                <span className="text-sm">Phone: +91 97126 97297</span>
              </div>
            </div>
            <form
              method="post"
              className="p-3 md:p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-3 mb-3">
                {/* Name input */}
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
              </div>

              {/* Email input */}
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Mobile input (optional) */}
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                    htmlFor="mobile"
                  >
                    Mobile number
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="mobile"
                    type="text"
                    placeholder="Mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message textarea */}
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Message"
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>
              </div>

              {/* Submit button */}
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
      </div>
    </>
  );
}

export default Getintouch;
