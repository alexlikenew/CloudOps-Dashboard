import type {Session} from "@supabase/supabase-js";
import {createContext, useContext, useEffect, useState} from "react";
import {supabase} from "../../shared/api/supabase.ts";

interface AuthInterface {
    session: Session | null,
    loading: boolean
}

const AuthContext = createContext<AuthInterface | null>(null)


export function AuthProvider({children}: { children: React.ReactNode }) {
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const initSession = async () => {
            try {
                const {data: {session}} = supabase.auth.getSession()
                setSession(session)
            } catch (error) {
                if (error instanceof Error) return error.message
                console.log('Error fetching session:', error)
            } finally {
                setLoading(false)
            }
        }
        initSession()
        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })
        return subscription.unsubscribe()
    }, [])

    if (loading) {
        return <div className = "flex h-screen items-center justify-center bg-slate-50">Loading...</div>;
    }

    return (
        <AuthContext.Provider value = {{session, loading}}>{children}</AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be in AuthProvider')
    }
    return context
}
