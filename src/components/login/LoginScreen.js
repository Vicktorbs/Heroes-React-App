import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
// import { authReducer } from '../../auth/autReducer'

export const LoginScreen = ({ history }) => {
    
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        dispatch({
            type : types.login, 
            payload: {
                name: 'Victor'
            }
        });
        history.replace('/');
    }

    return (
        <div className="container mt-4">
            <h3>Login!</h3>
            <hr />
            <button 
                className="btn btn-success"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
