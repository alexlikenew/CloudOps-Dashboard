import {useAuth} from "../providers/AuthProvider.tsx";
import {Navigate, Outlet} from "react-router-dom";

export function ProtectedRoute() {
    const {session} = useAuth()

    if (!session) {
        return (
            <Navigate to = {`/login`} replace/>
        )
    }
    return <Outlet/>
}