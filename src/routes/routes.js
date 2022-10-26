import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../components/Courses/CourseCategory/CourseCategory";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";
import Courses from "../components/Courses/RightSide/Courses";
import Home from "../components/Home/Home";
import Blogs from "../components/Pages/Blogs/Blogs";
import Checkout from "../components/Pages/Checkout/Checkout";
import CheckOutConfirm from "../components/Pages/Checkout/CheckOutConfirm";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import FAQ from "../components/Pages/FAQ/FAQ";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";

import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

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
        loader: () =>
          fetch("https://lunox-learning-server-side.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://lunox-learning-server-side.vercel.app/courses/category/${params.id}`
          ),
        element: <CourseCategory></CourseCategory>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://lunox-learning-server-side.vercel.app/course/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/course/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://lunox-learning-server-side.vercel.app/course/checkout/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/confirmCheckout",
        element: <CheckOutConfirm></CheckOutConfirm>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
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
