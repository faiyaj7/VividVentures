import React from "react";
import { MdOutlineHome, MdLocalPhone } from "react-icons/md";

import { IoMdMail } from "react-icons/io";
import useDocumentTitle from "../ComponentTitle";
const Contact = () => {
  useDocumentTitle("VividVentures | Contact");
  return (
    <section className="flexContainer flex-col lg:flex-row gap-4 px-4 w-full mt-10">
      {/* Contact input */}
      <div className="w-full">
        <h1 className="text-black/85 text-xl font-semibold tracking-wider">
          Contact Us
        </h1>
        <p className="text-black/55 text-sm mt-3">
          We love to hear from you, so if there's anything you'd like to ask us,
          we're right here and ready to help in every way we can
        </p>

        <form className="w-full mx-auto grid grid-cols-12 gap-5 mt-5">
          {/* Username */}
          <div className="relative z-0 w-full mb-5 group col-span-6">
            <input
              type="text"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm
                 text-gray-900 bg-transparent border-0 border-b-2
                  border-gray-300 appearance-none 
                   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              //    dark:text-white
              //    dark:border-gray-600 dark:focus:border-blue-500
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Username
            </label>
          </div>
          {/* Email input */}
          <div className="relative z-0 w-full mb-5 group col-span-6">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 
              bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                
               focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative z-0 w-full mb-5 group col-span-6">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900
               bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                
                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500
               dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
               top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          {/* Subject */}
          <div className="relative z-0 w-full mb-5 group col-span-6">
            <input
              type="text"
              name="floating_subject"
              id="floating_subject"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 
              bg-transparent border-0 border-b-2 border-gray-300 appearance-none
       
               focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Subject
            </label>
          </div>

          {/* textarea Message */}
          <div className="relative z-0 w-full mb-5 group col-span-12">
            <textarea
              type="text"
              rows={4}
              name="floating_subject"
              id="floating_subject"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 
              bg-transparent border-0 border-b-2 border-gray-300 appearance-none
       
               focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_subject"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 font-medium rounded-lg 
           text-sm col-span-3 p-[20px] lg:px-5 lg:py-2.5 text-center
            "
          >
            Submit
          </button>
        </form>
      </div>

      {/* Summary */}
      <div className="w-full lg:w-[60%] order-first lg:order-last">
        <h1 className="font-medium text-lg w-fit border-b-2">Working hours</h1>
        <h4 className="font-bold text-sm mb-3 mt-2">
          Sunday-Friday,8:30am - 10:00am GMT
        </h4>
        <hr className="w-[75%]" />
        <div className="flexContainer !justify-start gap-5 mt-3">
          <MdOutlineHome className="text-orange-500" />
          <h2 className="text-sm font-light text-black/85">
            15 Gulshan Road , Post Office , Gulshan ,Dhaka
          </h2>
        </div>
        <div className="flexContainer !justify-start gap-5 mt-3">
          <MdLocalPhone className="text-orange-500" />
          <h2 className="text-sm font-light text-black/85">+880-011646497</h2>
        </div>
        <div className="flexContainer !justify-start gap-5 mt-3 ">
          <IoMdMail className="text-orange-500" />
          <h2 className="text-sm font-light text-black/85">info@gmail.com</h2>
        </div>
        <h3 className="font-semibold uppercase text-black/85 mt-3">Join US</h3>
        <p className="w-[60%] text-sm  text-black/95 mt-3">
          We are happily open to new collaboration. You can ask any questions
          and offer problems by phone, email , instagram or twitter.
        </p>
      </div>
    </section>
  );
};

export default Contact;
