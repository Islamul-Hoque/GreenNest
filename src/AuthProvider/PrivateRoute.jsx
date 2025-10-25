import React, { useContext} from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading/>
    }
    if(user && ( user.email || user?.providerData?.[0]?.providerId ) ){
        return children
    } 
    return <Navigate to='/auth/login' state={{ from: location?.pathname }} />
};

export default PrivateRoute;
