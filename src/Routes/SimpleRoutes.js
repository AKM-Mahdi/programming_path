import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Lesson from "../Components/Lesson/Lesson";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";
// import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lesson/:id",
        element: (
          <PrivateRoutes>
            <Lesson></Lesson>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/lessons/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
