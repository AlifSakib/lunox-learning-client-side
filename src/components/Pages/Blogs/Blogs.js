import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  Express
                </a>
                <p className="text-gray-600">10 Jan 2022</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    What is cors ?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                What is CORS used for? Cross-Origin Resource Sharing (CORS) is
                an HTTP-header based mechanism that allows a server to indicate
                any origins (domain, scheme, or port) other than its own from
                which a browser should permit loading resources, If your REST
                API's resources receive non-simple cross-origin HTTP requests,
                you need to enable CORS support.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  Authentication
                </a>
                <p className="text-gray-600">26 Oct 2022</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    Why are you using firebase ? What other option do you have
                    to implement authentication ?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                Firebase Authentication system is easy to use . Firebase
                Authentication provides backend services, easy-to-use SDKs, and
                ready-made UI libraries to authenticate users to your app. It
                supports authentication using passwords, phone numbers, popular
                federated identity providers like Google, Facebook and Twitter,
                and more. There are some aulternatives : <br />
                1 . STYTCH
                <br />
                2 . Okta
                <br />
                3 . Ory
                <br />4 . Supabase
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  React
                </a>
                <p className="text-gray-600">28 Oct 2022</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    How does the provate route work ?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                React Router is one of the most important components of React
                ecosystem. PrivateRoute component is the blueprint for all
                private routes in the application. If the user is logged in, go
                on and display the component in question; otherwise, redirect
                the user to sign-in page. Additionally, we can define the logic
                of isLogin utility function separately in utils folder.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  Node
                </a>
                <p className="text-gray-600">28 Oct 2022</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                    What is Node ? how does Node work ?
                  </p>
                </a>
              </div>
              <p className="text-gray-700">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="#"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            See all articles
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
