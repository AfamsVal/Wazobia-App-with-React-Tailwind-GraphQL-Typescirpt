import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import { useForm } from "react-hook-form";
import { IRegister } from "../../utils/types";
import { registerSchema } from "../../validation/authSchema";
import ErrorBoundary from "../../components/error-boundary/ErrorBoundary";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // initialValues: initialValues,
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = () => {
    console.log("good");
    // console.log("good");
  };

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
              <form
                className="w-full max-w-lg"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  {/* <InputField
                    boxWidth="w-full md:w-1/2 px-3"
                    label="First Name"
                    name="firstName"
                    placeholder="Enter First Name"
                    type="text"
                    ref={register}
                    errorMsg="Please fill out this field!"
                  /> */}
                  {/* <input
                    className="appearance-none block w-full bg-gray-50 text-gray-900 border border-gray-3 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
                    name="firstName"
                    placeholder="Enter First Name"
                    type="text"
                    ref={register}
                  /> */}

                  <InputField
                    boxWidth="w-full md:w-1/2 px-3"
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter Last Name"
                    type="text"
                    errorMsg="Please fill out this field!"
                  />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <InputField
                    boxWidth="w-full px-3"
                    label="Email Address"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    errorMsg="Email is required!"
                  />
                  <InputField
                    boxWidth="w-full md:w-1/2 px-3 my-6"
                    name="password"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    errorMsg="Password is required!"
                  />
                  <InputField
                    boxWidth="w-full md:w-1/2 px-3 my-6"
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    type="password"
                    errorMsg="Confirm password is required!"
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
