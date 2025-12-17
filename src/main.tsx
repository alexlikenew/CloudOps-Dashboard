import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './app/styles/index.css'
import {AppProviders} from "./app/providers/AppProviders.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProviders/>
    </StrictMode>
)
