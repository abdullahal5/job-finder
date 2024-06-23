import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Jobs from "../pages/Jobs/Jobs.jsx";
import Company from "../pages/company/Company.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Authentication from "../pages/Authentication/Authentication.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Upgrade from "../pages/pro/Upgrade.jsx";
import JobDynamic from "../pages/jobDynamic/JobDynamic.jsx";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
    path: "/authentication",
    element: <Authentication />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/pro",
    element: <Upgrade />,
  },
  {
    path: "/jobs/:id",
    element: <JobDynamic />,
  },
]);

export default Root;
