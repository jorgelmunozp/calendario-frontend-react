import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
            <Routes>
                {/* <Route path="/login" element={ <LoginScreen />} /> */}
                <Route path="/" element={ <LoginScreen />} />

                {/* <Route path="/*" element={ <Navigate to="/auth/login" replace /> } /> */}
            </Routes>
        </div>
    </div>
  )
}
