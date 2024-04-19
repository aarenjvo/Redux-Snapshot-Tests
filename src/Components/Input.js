import { useState, useEffect } from "react"

function Input({ setUserData }) {
    const [username, setUsername] = useState('')

    useEffect(() => {
        console.log('Input component mounted')
    }, [username])

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)
        setUserData(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={handleChange} placeholder="username" />
                <input type='submit' />
            </form>
            <p>name: {username}</p>
        
        </div>
    )
}

export default Input