import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";

const ForgotPassword = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Forgot Password
                </h1>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <InputField
                  boxWidth="w-full"
                  label="Email Address"
                  placeholder="Enter Email"
                  type="email"
                  errorMsg="Please fill out this field!"
                />

                <Button width="w-full" label="Send" />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
