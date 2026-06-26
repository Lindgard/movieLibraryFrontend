import React from 'react'
import './ErrorMessage.css'

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className="error_message" role="alert">
            <span className="error_icon">⚠</span>
            <p className="error_message_text">{message}</p>
        </div>
    )
}

export default ErrorMessage