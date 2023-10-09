import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: ()=>fetch('/events.json')

        },
        {
            path: "/about",
            element:<About></About>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    },
  ]);

export default router;