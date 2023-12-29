/* // src/components/PrivateRoute.js
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, isAdmin, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated && isAdmin ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
 */