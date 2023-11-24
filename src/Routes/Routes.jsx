import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },

    /**Authentication Part Route Start**/

    {
        path: '/signIn',
        element: <SignIn></SignIn>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }

    /**Authentication Part Route Start**/

]);