import React from 'react'
import './LoadingSpinner.css'

interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner = ({ message }: LoadingSpinnerProps) => {
    return (
        <div className="loading_spinner_wrapper">
            <div className="spinner">
                {message && <p className="spinner_text">{message}</p>}
            </div>
        </div>
    )
}

export default LoadingSpinner