import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './app/styles/index.css'
import {AppProviders} from "./app/providers/AppProviders.tsx";
import {supabase} from "./shared/api/supabase.ts";

console.log('supabase client:',supabase)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProviders/>
    </StrictMode>
)
