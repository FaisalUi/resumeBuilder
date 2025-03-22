import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Landing from '../pages/Landing'
import PrivateRoute from './PrivateRoute'
import Saved from '../pages/Saved'
import UserLayout from '../layout/user/UserLayout'
import Resume from '../pages/Resume'
import ForgetPassword from '../auth/ForgetPassword'
import Profile from '../pages/Profile'

const Routing = () => {



    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />

            {/* ============================================= Private Route ============================================= */}
            <Route element={<PrivateRoute />}>
                <Route path="/landing" element={<Landing />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/saved" element={<Saved />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path="/landing/resume/:id" element={<Resume />} />
            </Route>
        </Routes>
    )
}

export default Routing