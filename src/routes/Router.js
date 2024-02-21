import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

// out pages
const Categories = lazy(()=>import('../views/Categories.jsx'))
const SubCategories = lazy(()=>import('../views/SubCategories.jsx'))
const Inventory = lazy(()=>import('../views/Inventory.jsx'))
const Users = lazy(()=>import('../views/Users.jsx'))
const Payments = lazy(()=>import('../views/Payments.jsx'))
const Orders = lazy(()=>import('../views/Orders.jsx'))
const ContactUs = lazy(()=>import('../views/ContactUs.jsx'))
const Feedback = lazy(()=>import('../views/Feedback.jsx'))
const Settings = lazy(()=>import('../views/Settings.jsx'))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      
      // our pages
      { path: "/categories", exact: true, element: <Categories /> },
      { path: "/sub-categories", exact: true, element: <SubCategories /> },
      { path: "/inventory", exact: true, element: <Inventory /> },
      { path: "/users", exact: true, element: <Users /> },
      { path: "/payments", exact: true, element: <Payments /> },
      { path: "/users", exact: true, element: <Users /> },
      { path: "/users", exact: true, element: <Payments /> },
      { path: "/orders", exact: true, element: <Orders /> },
      { path: "/contact-us", exact: true, element: <ContactUs /> },
      { path: "/feedbacks", exact: true, element: <Feedback /> },
      { path: "/settings", exact: true, element: <Settings /> },
    ],
  },
];

export default ThemeRoutes;
