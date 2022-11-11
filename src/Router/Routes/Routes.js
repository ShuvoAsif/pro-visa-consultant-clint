import Main from "../../Layout/Main";
import Review from "../../Pages/Review/Review";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import Details from "../../Pages/Home/Service/Details";
import MyReview from "../../Pages/Home/Service/MyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/Home/Service/AddService";
import Blog from "../../Pages/Blog/Blog";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(` https://visa-agency-server.vercel.app/services/${params.id}`)

            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: ({ params }) => fetch(` https://visa-agency-server.vercel.app/services/${params.id}`)
            }
        ]
    }
])
export default router;