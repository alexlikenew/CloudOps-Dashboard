import * as React from "react";
import {createPortal} from "react-dom";
import {X} from "lucide-react";
import {Button} from "../button/Button.tsx";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal = ({isOpen, onClose, title, children}: ModalProps) => {
    if (!isOpen) return null;
    return createPortal(
        <div
            className = "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
            <div className = "w-full max-w-md rounded-xl bg-white shadow-2xl ring-1 ring-slate-900/5">
                <div className = "flex items-center justify-between border-b border-slate-100 p-4">
                    <h3 className = "font-semibold text-slate-900">{title}</h3>
                    <Button onClick = {onClose}><X size = {20}/></Button>
                </div>
                <div className = "p-4">
                    {children}
                </div>

            </div>
        </div>,
        document.body
    );
};