import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isNotAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                (isNotAuthenticated) ?
                    (<Component { ...props } />) :
                    (<Redirect to='/' />)
            )}
        />
    )
}

PublicRoute.protoTypes = {
    isNotAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
