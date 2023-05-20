import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Signup from "../Pages/Home/Signup/Signup";
import Login from "../Pages/Home/Login/Login";
import Blog from "../Pages/Home/Blog/Blog";
import AllToys from "../Pages/Home/AllToys/AllToys";
import Details from "../Pages/Shared/Details/Details";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import MyToys from "../Pages/Home/MyToys/MyToys";
import AddToys from "../Pages/Home/AddToys/AddToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'addatoys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://disney-dolls-server.vercel.app/product/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ]
    }
])
export default router;