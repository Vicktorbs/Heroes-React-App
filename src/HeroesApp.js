import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/autReducer'
import { AppRouter } from './routes/AppRouter'

const init = () => {
    // Establecimiento del estado inicial del reducer para el estado de sesion 
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {
    // Es lo que se distribuira con el AuthContext
    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
