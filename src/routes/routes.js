import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../components/Courses/CourseCategory/CourseCategory";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";
import Courses from "../components/Courses/RightSide/Courses";
import Home from "../components/Home/Home";
import Blogs from "../components/Pages/Blogs/Blogs";
import Checkout from "../components/Pages/Checkout/Checkout";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";

import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/category/${params.id}`),
        element: <CourseCategory></CourseCategory>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/course/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/checkout/${params.id}`),
        element: <Checkout></Checkout>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
