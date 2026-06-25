import React, { type ButtonHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className="main-button" {...props} onClick={() => alert('Button clicked!')}>{children}</button>
    )
}

export default Button