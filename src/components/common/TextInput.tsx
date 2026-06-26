import { type InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: 'text' | 'password' | 'email';
}

const TextInput = ({ label, type = 'text', ...props }: TextInputProps) => {
    return (
        <div className="input-wrapper">
            {label && <label>{label}</label>}
            <input type={type} {...props} />
        </div>
    )
}

export default TextInput