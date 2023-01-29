import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../../components/button/Button";
import InputField from "../../components/input-field/InputField";
import { IRegister } from "../../utils/types";

const RegWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string().min(4).max(10).required("Password is Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null])
        .required("Confirm Password is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
              <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <InputField
                    boxWidth="w-full md:w-1/2 px-3"
                    label="First Name"
                    name="firstName"
                    placeholder="Enter First Name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    errorMsg={
                      formik.touched.firstName && formik.errors.firstName
                        ? formik.errors.firstName
                        : ""
                    }
                  />

                  <InputField
                    boxWidth="w-full md:w-1/2 px-3"
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter Last Name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    errorMsg={
                      formik.touched.lastName && formik.errors.lastName
                        ? formik.errors.lastName
                        : ""
                    }
                  />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <InputField
                    boxWidth="w-full px-3"
                    label="Email Address"
                    name="email"
                    placeholder="Enter Email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    errorMsg={
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : ""
                    }
                  />
                  <InputField
                    boxWidth="w-full md:w-1/2 px-3 my-6"
                    name="password"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    errorMsg={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : ""
                    }
                  />
                  <InputField
                    boxWidth="w-full md:w-1/2 px-3 my-6"
                    name="confirmPassword"
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    errorMsg={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? formik.errors.confirmPassword
                        : ""
                    }
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

export default RegWithFormik;
