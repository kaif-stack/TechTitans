import { useState } from "react"
function SignUpPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('https://swiftfix-backend.onrender.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <div className="loginContainer">
                <h1>Register</h1>
                <form className="loginForm" onSubmit={registerUser}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="name"
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <input type="submit" value="register" />
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;

