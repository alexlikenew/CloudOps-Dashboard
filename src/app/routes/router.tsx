import {createBrowserRouter, Navigate} from 'react-router-dom';
import FilesPage from "../../pages/files/ui/FilesPage.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import {LoginPage} from "../../pages/login/ui/LoginPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/',
        element: <ProtectedRoute/>,
        children: [
            {
                path: '/', element: <Navigate to = "/login" replace/>
            },
            {
                path: '/files',
                element: <FilesPage/>
            },
        ],
    },
]);