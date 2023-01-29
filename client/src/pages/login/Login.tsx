import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import { ILogin } from "../../utils/types";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const validate = (values: ILogin) => {
    const errors: ILogin = {};

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is Required";
    } else if (values.password.length > 15) {
      errors.password = "Max of 15 characters is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Log In
                </h1>
              </div>
              <form className="space-y-4" onSubmit={formik.handleSubmit}>
                <InputField
                  boxWidth="w-full"
                  name="email"
                  label="Email Address"
                  placeholder="Enter Email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  errorMsg={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ""
                  }
                />

                <InputField
                  boxWidth="relative"
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  errorMsg={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : ""
                  }
                >
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className="fas fa-eye absolute top-11 right-3 text-gray-400 cursor-pointer"
                  />
                </InputField>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button width="w-full" label="Log In" />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
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

export default Login;
