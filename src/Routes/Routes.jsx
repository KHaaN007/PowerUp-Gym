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
import AllSubscribers from "../Dashboard/Admin/AllSubscribers/AllSubscribers";
import AllTrainers from "../Dashboard/Admin/AllTrainers/AllTrainers";
import AppliedTrainer from "../Dashboard/Admin/AppliedTrainer/AppliedTrainer";
import Balance from "../Dashboard/Admin/Balance/Balance";
import ManageSlots from "../Dashboard/Trainer/ManageSlots/ManageSlots";
import ManageMember from "../Dashboard/Trainer/ManageMember/ManageMember";
import AddNewForum from "../Dashboard/Trainer/AddNewForum/AddNewForum";
import AddClass from "../Dashboard/Trainer/AddNewClass/AddClass";

import DashboardHome from "../Dashboard/DashboardHome";

import Payment from "../Component/Payment/Payment";
import RecommendedClasses from "../Dashboard/Member/RecommendedClasses/RecommendedClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";



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
                element: <PrivateRoute><BecomeATrainer></BecomeATrainer></PrivateRoute>
            },
            {
                path: '/trainerDetail/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainerDetail/${params.id}`)


            },
            {
                path: '/packageDetail/:id',
                element: <PrivateRoute><TrainerPackage></TrainerPackage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/trainerDetail/${params.id}`)


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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
            },
            {
                path: 'allSubscribes',
                element: <AdminRoute><AllSubscribers></AllSubscribers></AdminRoute>
            },
            {
                path: 'allTrainer',
                element: <AdminRoute><AllTrainers></AllTrainers></AdminRoute>
            },
            {
                path: 'appliedTrainer',
                element: <AdminRoute><AppliedTrainer></AppliedTrainer></AdminRoute>
            },
            {
                path: 'balance',
                element: <AdminRoute><Balance></Balance></AdminRoute>
            },
            {
                path: 'manageSlots',
                element: <ManageSlots></ManageSlots>,
            },
            {
                path: 'manageMember',
                element: <ManageMember></ManageMember>
            },
            {
                path: 'addNewForum',
                element: <AddNewForum></AddNewForum>
            },
            {
                path: 'addNewClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'payTrainer/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/trainerDetail/${params.id}`)
                }
            },
            {
                path: 'recommendedClasses',
                element: <RecommendedClasses></RecommendedClasses>,
                
            },

        ]
    },

    /**Authentication Route**/

    {
        path: '/login',
        element: <SignIn></SignIn>
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    }

    /**Authentication Part Route Start**/

]);