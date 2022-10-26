import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const {
    image,
    title,
    description,
    duration,
    id,
    price,
    instructor,
    lecture,
  } = courseDetails;

  const componentRef = useRef();
  const handlePrintPdf = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    // onAfterPrint: () => alert("Print Success"),
  });
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
          <img
            className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
            src={image}
            alt=""
          />
          <Link
            to="#"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
          <div ref={componentRef}>
            <div className=" mb-6 text-start font-bold text-2xl text-red-500 underline underline-offset-4">
              <h3>
                ${price}
                <span className="text-lg">.00</span>
              </h3>
            </div>
            <h2 className="mb-5  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-start">
              {title}
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg text-start">
              {description}
            </p>
            <p className="mb-6 text-gray-900 text-start">
              {" "}
              <span className="font-bold">Instructor</span> :{" "}
              <span className="text-blue-500 underline ">{instructor}</span>
            </p>
            <p className="mb-6 text-gray-900 text-start">
              <span className="font-bold">Duration</span> : {duration} weeks
            </p>
            <p className="mb-6 text-gray-900 text-start">
              <span className="font-bold">Lecture</span> : {lecture}
            </p>
          </div>

          <div className="flex items-center md:justify-center">
            <button
              // to="/reactPdf"
              onClick={handlePrintPdf}
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Download Pdf
            </button>

            <Link
              to={`/course/checkout/${id}`}
              aria-label=""
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-800 transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
            >
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
