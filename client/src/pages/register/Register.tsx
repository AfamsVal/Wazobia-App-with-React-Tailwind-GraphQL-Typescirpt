import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";

const Register = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an Account
                </h1>
                <div className="text-center">
                  Already have an account?
                  <Link to="/login" className="text-blue-600 ml-2 font-bold">
                    Login
                  </Link>
                </div>
              </div>
              {/* <form className="space-y-4 md:space-y-6" action="#"> */}
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <InputField
                    boxWidth="w-full md:w-1/2 px-3"
                    label="First Name"
                    placeholder="Enter First Name"
                    type="text"
                    errorMsg="Please fill out this field!"
                  />

                  <InputField
                    boxWidth="w-full md:w-1/2 px-3"
                    label="Last Name"
                    placeholder="Enter Last Name"
                    type="text"
                    errorMsg="Please fill out this field!"
                  />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <InputField
                    boxWidth="w-full px-3"
                    label="Email Address"
                    placeholder="Enter Email"
                    type="email"
                    errorMsg="Email is required!"
                  />
                  <InputField
                    boxWidth="w-full px-3"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    errorMsg="Password is required!"
                  />

                  <div className="w-full px-3">
                    <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as you'd like
                    </p>
                  </div>
                </div>
                <div>
                  <Button width="w-2/3 mx-auto block" label="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
