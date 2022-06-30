import { useState } from "react"

export const useUserAuth = () => {
    let current = localStorage.getItem("user")
    if (current?.user !== undefined) current = current.user

    const [user, setUser] = useState(current === null ? current : JSON.parse(current)?.user === undefined ? JSON.parse(current) : JSON.parse(current).user)
    
    const login = user => {
        setUser(user.user)
        localStorage.setItem("user", JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return [user, login, logout]
}
