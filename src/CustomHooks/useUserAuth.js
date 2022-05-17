import { useState } from "react"

export const useUserAuth = () => {
    const current = localStorage.getItem("user")

    const [user, setUser] = useState(current === null ? current : JSON.parse(current))
    
    const login = user => {
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return {user, login, logout}
}
