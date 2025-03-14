import { Card } from "@/components/Card";
import React from "react";

const SigninModule = () => {
  return (
    <div className="container ">
      <div className="flex justify-center items-center h-screen">
        <Card className="p-8 w-[400px] ">
          <div className="flex items-center justify-center gap-2">
            <img
              className="h-10 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="text-center text-2xl/9  tracking-wider text-white font-serif">
              Sign In
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold  bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text "
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button className="bg-white text-gray-950 inline-flex items-center justify-center gap-2 mt-2 h-10 w-full rounded-xl font-semibold px-6">
                  <span>Sign In</span>
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SigninModule;
