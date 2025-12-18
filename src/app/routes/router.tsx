import {createBrowserRouter, Navigate} from 'react-router-dom';
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import {LoginPage} from "../../pages/login/ui/LoginPage.tsx";
import {AppLayout} from "../../widgets/app-shell/AppLayout.tsx";
import FilesPage from "../../pages/files/ui/FilesPage.tsx";


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
                element: <AppLayout/>,
                children: [
                    {
                        path: '/',
                        element: <Navigate to = {'/files'} replace/>
                    },
                    {
                        path: '/files',
                        element: <FilesPage/>
                    }
                ]
            }
        ],
    },
]);