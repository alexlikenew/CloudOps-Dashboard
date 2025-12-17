import {Button} from "../../../shared/ui/button/Button.tsx";

export const HomePage = () => {
    return (
        <div className = "space-y-6">
            <div>
                <h1 className = "text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className = "text-slate-500">Welcome back to your CloudOps control center.</p>
            </div>

            <div className = "grid grid-cols-1 gap-4 md:grid-cols-3">
                {['Total Storage', 'Active Files', 'Bandwidth'].map((stat) => (
                    <div key = {stat} className = "rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className = "text-sm font-medium text-slate-500">{stat}</h3>
                        <p className = "mt-2 text-3xl font-bold text-slate-900">---</p>
                    </div>
                ))}
            </div>

            <div className = "flex items-center gap-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-700">
                <div className = "flex-1">
                    <p className = "font-medium">System status is healthy</p>
                    <p className = "text-sm opacity-80">All services are operational.</p>
                </div>
                <Button size = "sm">View Logs</Button>
            </div>
        </div>
    );
};