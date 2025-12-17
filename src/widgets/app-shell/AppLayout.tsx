import Sidebar from "./ui/Sidebar.tsx";
import Header from "./ui/Header.tsx";
import {Outlet} from "react-router-dom";


export const AppLayout = () => {
    return (
        <div className = "flex h-screen w-full overflow-hidden bg-slate-50 text-slate-900">
            <Sidebar/>
            <div className = "flex flex-1 flex-col min-w-0">
                <Header/>
                <main className = "flex-1 overflow-y-auto bg-slate-50 p-8 scroll-smooth">
                    <div className = "mx-auto max-w-7xl">
                        <Outlet/>
                    </div>
                </main>
            </div>
        </div>
    );
};

