import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import AddTask from "../../AddTask/AddTask";
import CompletedTask from "../../CompletedTask/CompletedTask";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import MyTask from "../../MyTask/MyTask";
import SignUp from "../../SignUp/SignUp";
import UpdateTask from "../../UpdateTask/UpdateTask";




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
                path:"/CompletedTask/:id",
                element: <CompletedTask></CompletedTask>,
                loader:({params}) => fetch(`http://localhost:5000/tasks1/${params.id}`)
            },
            {
                path:"/SignIn",
                element: <Login></Login>,
            },
            {
                path:"/SignUp",
                element: <SignUp></SignUp>,
            },
            {
                path:"/updatetask/:id",
                element: <UpdateTask></UpdateTask>,
                loader:({params}) => fetch(`http://localhost:5000/tasks1/${params.id}`)
            }

        ]
    }
])

export default router;