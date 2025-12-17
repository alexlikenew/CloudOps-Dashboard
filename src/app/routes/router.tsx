import {createBrowserRouter, Navigate} from 'react-router-dom';


import {AppLayout} from "../../widgets/app-shell/AppLayout.tsx";
import {HomePage} from "../../pages/home/ui/HomePage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: '*', element: <Navigate to = "/" replace/>},
        ],
    },
]);