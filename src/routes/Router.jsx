import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
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
        }
      ]
    },
  ]);

export default router;