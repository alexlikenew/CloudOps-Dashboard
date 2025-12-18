import {RouterProvider} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';


import {queryClient} from "../../shared/api/queryClient.ts";
import {router} from "../routes/router.tsx";
import {AuthProvider} from "./AuthProvider.tsx";

export const AppProviders = () => {
    return (
        <QueryClientProvider client = {queryClient}>
            <AuthProvider>
                <RouterProvider router = {router}/>
                <ReactQueryDevtools initialIsOpen = {false}/>
            </AuthProvider>
        </QueryClientProvider>
    );
};