import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://lunox-learning-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Link
          to={`/courses/category/${category.category_id}`}
          key={category.id}
        >
          <div
            key={category.id}
            className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-purple-400 hover:border-purple-400 mb-5 "
          >
            <div className="mr-2">
              <svg
                className="w-6 h-6 transition-colors duration-200 text-purple-400 group-hover:text-white sm:w-8 sm:h-8"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
              {category.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
