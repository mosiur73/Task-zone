import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../MainLayout/MainLayout";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../DashBoard/DashBoard";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        }
       

    ]
  },
  {
    path:"/dashboard",
    element:<DashBoard></DashBoard>
  }
]);