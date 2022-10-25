import React from "react";
import { Link } from "react-router-dom";

const CheckOutConfirm = () => {
  return (
    <div className="h-screen flex items-center">
      <section class="max-w-lg px-4 py-12 mx-auto">
        <img class="mx-auto sm:w-1/4" src="/empty.png" alt="" />
        <h2 class="mt-2  font-medium text-center text-gray-800 text-4xl">
          Congratulations Your Successfully Enrolled To The Course
        </h2>
        <div class="flex flex-col items-center justify-center mt-4 space-y-1 md:flex-row md:space-y-0 md:space-x-1">
          <Link
            to="/"
            aria-label=""
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
          >
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CheckOutConfirm;
