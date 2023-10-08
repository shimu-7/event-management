import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Root from "../layout/Root";


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
            path: "/about",
            element:<About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        }
      ]
    },
  ]);

export default router;