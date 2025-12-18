import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {supabase} from "../../../shared/api/supabase.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Lock, Mail} from "lucide-react";
import {Button} from "../../../shared/ui/button/Button.tsx";

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Min 8 characters')
})

type LoginFormData = z.infer<typeof loginSchema>


export function LoginPage() {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })
    const navigate = useNavigate()
    const [apiError, setApiError] = useState<string | null>(null)

    async function handleLogin(data: LoginFormData) {
        setApiError(null)
        const {error} = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password,

        })
        if (error) {
            setApiError(error.message)
        } else {
            navigate('/')
        }
    }

    return (
        <div className = "bg-slate-50 flex w-full h-screen items-center justify-center">
            <form className = "mt-8 space-y-6" onSubmit = {handleSubmit(handleLogin)}>
                <div className = "space-y-4">
                    <div>
                        <label htmlFor = "email" className = "block text-sm font-medium text-slate-700">
                            Email address
                        </label>
                        <div className = "relative mt-1">
                            <div className = "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Mail className = "h-5 w-5 text-slate-400"/>
                            </div>
                            <input
                                id = "email"
                                type = "email"
                                {...register('email')}
                                required
                                className = "block w-full rounded-md border border-slate-300 py-2 pl-10 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                placeholder = "you@example.com"
                            />
                            {errors.email && <p>Email is incorrect</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor = "password" className = "block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <div className = "relative mt-1">
                            <div className = "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Lock className = "h-5 w-5 text-slate-400"/>
                            </div>
                            <input
                                {...register('password')}
                                id = "password"
                                type = "password"
                                required
                                className = "block w-full rounded-md border border-slate-300 py-2 pl-10 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                placeholder = "••••••••"
                            />
                            {errors.password && <p>Password is incorrect</p>}
                        </div>
                    </div>
                </div>
                {apiError && (
                    <div className = "rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-100">
                        {apiError}
                    </div>
                )}

                <Button
                    variant = "default"
                    className = "w-full justify-center py-2.5"
                    disabled = {isSubmitting}
                >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
            </form>
        </div>
    )
}