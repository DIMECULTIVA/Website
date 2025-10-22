// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ className = "" }) {
    const navigate = useNavigate();
    const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/"));

    return (
        <button
            onClick={goBack}
            className={`fixed left-3 top-3 z-50 glass px-3 py-2 rounded-xl text-sm hover:bg-white/20 transition
                  [padding-left:calc(env(safe-area-inset-left,0px)+12px)]
                  [padding-top:calc(env(safe-area-inset-top,0px)+8px)] ${className}`}
            aria-label="Go back"
        >
            <span className="inline-flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
            </span>
        </button>
    );
}
