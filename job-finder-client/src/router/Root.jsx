import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Jobs from "../pages/Jobs/Jobs.jsx";
import Company from "../pages/company/Company.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/Signup/SignUp.jsx";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/company",
    element: <Company />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default Root;
