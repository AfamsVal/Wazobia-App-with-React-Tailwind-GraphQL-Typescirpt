import Login from "./pages/login/Login";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const ForgotPassword = lazy(
  () => import("./pages/forgot-password/ForgotPassword")
);
const RegWithFormik = lazy(() => import("./pages/register/RegWithFormik"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Register = lazy(() => import("./pages/register/Register"));
const About = lazy(() => import("./pages/about/About"));
const News = lazy(() => import("./pages/news/News"));
const Faq = lazy(() => import("./pages/faq/Faq"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
const MoreDetails = lazy(() => import("./pages/more-detials/MoreDetails"));

function App() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/details/:id" element={<MoreDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<RegWithFormik />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
