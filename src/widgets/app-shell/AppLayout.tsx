import Sidebar from "./ui/Sidebar.tsx";


export const AppLayout = () => {
    return (
      <Sidebar/>
    );
};

// Pomocniczy komponent do linków (lokalny dla tego pliku)
// const NavItem = ({ to, icon, children }: { to: string; icon: React.ReactNode; children: React.ReactNode }) => (
//     <NavLink
//         to={to}
//         className={({ isActive }) => cn(
//             "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
//             isActive ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-100"
//         )}
//     >
//         {icon} {children}
//     </NavLink>
// );