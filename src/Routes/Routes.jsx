import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Trainer from "../Pages/Trainer/Trainer";
import Classes from "../Pages/Classes/Classes";
import Community from "../Pages/Community/Community";
import Dashboard from "../Pages/Dashboard/Dashboard";
import BecomeATrainer from "../Pages/Trainer/BeATrainer/BecomeATrainer/BecomeATrainer";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import TrainerPackage from "../Pages/Trainer/TrainerPackage/TrainerPackage";
import ClasseDetails from "../Pages/Classes/ClasseDetails/ClasseDetails";



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
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/trainer',
                element: <Trainer></Trainer>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/becomeATrainer',
                element: <BecomeATrainer></BecomeATrainer>
            },
            {
                path: '/trainerDetail/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainerDetail/${params.id}`)


            },
            {
                path: '/packageDetail/:id',
                element: <TrainerPackage></TrainerPackage>,
                // loader: ({ params }) => fetch(`http://localhost:5000/packageDetail/${params.id}`)


            },
            {
                path: '/classeDetail/:id',
                element: <ClasseDetails></ClasseDetails>, 
                loader: ({ params }) => fetch(`http://localhost:5000/classesDetail/${params.id}`)

           
            }

        ]
    },
   
    /**Dashboard Route**/
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },

    /**Authentication Route**/

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