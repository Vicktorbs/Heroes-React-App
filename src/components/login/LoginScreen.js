import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
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
