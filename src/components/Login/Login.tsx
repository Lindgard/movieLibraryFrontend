import { useState } from "react"
import Button from "../common/Button"
import TextInput from "../common/TextInput"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            if (!response.ok) {
                throw new Error('Invalid username or password')
            }

            const data = await response.json()

            console.log("Login successful:", data)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to login. Please try again.")
        }
    }
    return (
        <form className="login_form" onSubmit={handleSubmit}>
            <TextInput
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button type="submit">Login</Button>
        </form>
    )
}

export default Login