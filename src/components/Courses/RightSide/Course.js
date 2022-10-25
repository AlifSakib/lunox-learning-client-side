import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { image, title, category, id } = course;
  return (
    <div className="">
      <Link
        to={`/course/${id}`}
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-96">
          <img
            src={image}
            className="object-cover w-full h-48"
            alt="CourseImage"
          />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold leading-5 text-start">
                {title}
              </h6>
              <p className="text-sm text-gray-900 text-start">
                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
            <div>
              <p className="inline-block px-3  py-1 mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase rounded-full bg-blue-400">
                {category}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Course;
