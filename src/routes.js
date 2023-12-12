import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Register from "./register";
import Login from "./pages/login";
import Todo from "./pages/todo";
import Blog from "./pages/blog";
import Hobbies from "./pages/checkbox";
import BlogPage from "./pages/singlePage";
import Feedback from "./pages/feedback";
import Exams from "./pages/exams";
import { Exclamation } from "react-bootstrap-icons";
import Users from "./pages/user";
import Contact from "./pages/blog/contact";
import Logout from "./pages/logout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:id",
      element: <BlogPage />,
    },
    {
      path: "/blog/:id",
      element: <BlogPage />,
    },
    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/exams",
      element: <Exams />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    // {
    //   path: "/hobbies",
    //   element: <Hobbies />,
    // },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
