import React from "react";
import toast from "react-hot-toast";
import { FaBtc, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const Checkout = () => {
  const courseCheckOut = useLoaderData();
  const { image, title, instructor, lecture, duration, enrolled, language } =
    courseCheckOut;
  const handleCheckOut = () => {
    toast.success("Payment Successful");
  };

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={image}
              alt=""
            />
          </div>

          <div className="lg:pr-10 text-start">
            <a
              href="/"
              aria-label="Go Home"
              title="Logo"
              className="inline-block mb-5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
            </a>
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              {title}
            </h5>
            <p className="mb-6 text-gray-900">
              {" "}
              <span className="font-bold">Instructor</span> :{" "}
              <span className="text-blue-500 underline">{instructor}</span>
            </p>
            <p className="mb-6 text-gray-900">
              <span className="font-bold">Lecture</span> : {lecture}
            </p>
            <p className="mb-6 text-gray-900">
              <span className="font-bold">Duration</span> : {duration} weeks
            </p>
            <p className="mb-6 text-gray-900">
              <span className="font-bold">Enrolled</span> : {enrolled} students
            </p>
            <p className="mb-6 text-gray-900">
              <span className="font-bold">Language</span> : {language}
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex justify-between">
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaCcMastercard className="w-6 h-6 text-red-500"></FaCcMastercard>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaCcPaypal className="w-6 h-6 text-sky-500"></FaCcPaypal>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaCcVisa className="w-6 h-6 text-blue-600"></FaCcVisa>
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 "
                >
                  <FaBtc className="w-6 h-6 text-orange-400"></FaBtc>
                </a>
              </div>
              <div>
                <button
                  onClick={handleCheckOut}
                  aria-label=""
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
