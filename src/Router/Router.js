import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Client from "../Pages/Client/Client";
import Gvoucher from "../Pages/Gvoucher/Gvoucher";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Voucher from "../Pages/Voucher/Voucher";


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
                path: '/dashboard',
                element: <Home></Home>
            },
            {
                path: '/client-list',
                element: <Client></Client>
            },
            {
                path: '/voucher-list',
                element: <Voucher></Voucher>
            },
            {
                path: '/voucher-generator',
                element: <Gvoucher></Gvoucher>
            },
            {
                path: '/service-list',
                element: <Services></Services>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            }
        ]
    }
]);

export default router;