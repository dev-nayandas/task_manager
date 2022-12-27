import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AddTask from "../../AddTask/AddTask";
import CompletedTask from "../../CompletedTask/CompletedTask";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import MyTask from "../../MyTask/MyTask";
import SignUp from "../../SignUp/SignUp";




const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
            {
                path:"/",
                element: <Home></Home>,
            },
            {
                path:"/home",
                element: <Home></Home>,
            },
            {
                path:"/AddTask",
                element: <AddTask></AddTask>,
            },
            {
                path:"/MyTask",
                element: <MyTask></MyTask>,
            },
            {
                path:"/CompletedTask",
                element: <CompletedTask></CompletedTask>,
            },
            {
                path:"/SignIn",
                element: <Login></Login>,
            },
            {
                path:"/SignUp",
                element: <SignUp></SignUp>,
            },

        ]
    }
])

export default router;