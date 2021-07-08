import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');

        dispatch({
            type : types.logout
        });
        localStorage.setItem('user', JSON.stringify(user))

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="collapse navbar-collapse">
                <div className="navbar-nav me-auto mb-2 mb-lg-0">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
                <span className="navbar-text">
                    { user.name }
                </span>
                <span className="navbar-text">
                    <button 
                        className="nav-item nav-link btn text-white"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </span>
            </div>
        </nav>
    )
}