import React from 'react'
import useToken from '../utils/useToken'
import UserLayout from '../layout/user/UserLayout'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const token = localStorage.getItem('userToken');
    return !!token ? <UserLayout> <Outlet /> </UserLayout> : <Navigate to='/' />

}

export default PrivateRoute