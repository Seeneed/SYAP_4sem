import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import RegistrationForm from './RegistrationForm';
import SignInForm from './SignInForm';
import ResetPasswordForm from './ResetPasswordForm';
import { NotFound } from './NotFound';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/sign-up" element={<RegistrationForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
      </Routes>
    </Router>
  );
}
