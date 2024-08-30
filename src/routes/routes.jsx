import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import SubmittedAssignment from "../pages/SubmittedAssignment/SubmittedAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../pages/Assignments/Assignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "create-assignment",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "assignments",
        element: <Assignments></Assignments>
      },
      {
        path: "my-assignment",
        element: (
          <PrivateRoute>
            <MyAssignment></MyAssignment>
          </PrivateRoute>
        ),
      },

      {
        path: "submitted-assignment",
        element: (
          <PrivateRoute>
            <SubmittedAssignment></SubmittedAssignment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
