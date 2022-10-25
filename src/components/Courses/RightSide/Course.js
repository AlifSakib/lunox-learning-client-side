import React from "react";

const Course = ({ course }) => {
  const { image, totle, category } = course;
  return (
    <div>
      <a
        href="/"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <img src={image} className="object-cover w-full h-48" alt="" />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold leading-5">
                Skate ipsum dolor
              </h6>
              <p className="text-sm text-gray-900">
                Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Course;
