import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { startChecking } from '../actions/auth';
import { startLogin } from '../actions/auth';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    //const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        dispatch( startChecking() );


        // dispatch( startLogin() );

        // if( uid ){
        //     dispatch( startLogin() );
        //     setIsLoggedIn( true );
    
        //   } else {
        //     setIsLoggedIn( false );
        //   }

        

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Routes>

                    {/* <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ CalendarScreen } 
                        isAuthenticated={ !!uid }
                    />  */}

                    <Route path="/login/*" isAuthenticated={ !!uid  } element={
                        <PublicRoute isLoggedIn={ isLoggedIn } >
                            <AuthRouter />
                        </PublicRoute>
                    } 
                    />


                    <Route exact path="/" isAuthenticated={ !!uid  } element={
                        <PrivateRoute isLoggedIn={ isLoggedIn }>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } 
                    />

                    <Route 
                        path="/*" 
                        element={ <Navigate to="/login" replace /> } 
                    />
                </Routes>
            </div>
        </Router>
    )
}
