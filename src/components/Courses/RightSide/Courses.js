import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../LeftSide/Categories";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid lg:grid-cols-8 lg:w-9/12 mx-auto">
      <div className="lg:grid col-span-2  mx-6 hidden">
        <div className="lg:flex lg:items-center">
          <Categories></Categories>
        </div>
      </div>
      <div className="grid col-span-6">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="text-4xl text-start mb-4 font-bold">
            <h1>Get job-ready for an in-demand career</h1>
          </div>
          <div className="text-start text-2xl mb-6">
            <p>
              Break into a new field like information technology or data
              science. No prior experience necessary to get started.
            </p>
          </div>
          <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
