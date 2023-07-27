import React, { useState } from 'react';
import '../Login/forgot.css';

const ForgotAccount = ({ hideForgotPassword, showLoginForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(true);
  const [showValidateOTPForm, setShowValidateOTPForm] = useState(false);
  const [otp, setOTP] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleResetPasswordClick = (e) => {
    e.preventDefault();
    // Perform API call to request password reset
    // Logic to handle the response and show OTP validation form
    setShowResetPasswordForm(false);
    setShowValidateOTPForm(true);
  };

  const handleValidateOTPClick = (e) => {
    e.preventDefault();
    // Perform API call to validate OTP
    // Logic to handle the response and perform password reset
    // After successful reset, show login form again
    alert('Password reset successful. Please login with your new password.');
    hideForgotPassword();
  };

  const handleGoBackClick = (e) => {
    e.preventDefault();
    showLoginForm();
  };

  if (showResetPasswordForm) {
    return (
      <div className="forgot-account-container">
        <h1>Forgot Account</h1>
        <form className="forgot-account-form" onSubmit={handleResetPasswordClick}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <div className="forgot-buttons">
            <button type="submit">Reset Password</button>
            <button onClick={handleGoBackClick}>Go back to login form</button>
          </div>
        </form>
      </div>
    );
  }

  if (showValidateOTPForm) {
    return (
      <div className="forgot-account-container">
        <h1>Forgot Account</h1>
        <form className="forgot-account-form" onSubmit={handleValidateOTPClick}>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />

          <div className="forgot-buttons">
            <button type="submit">Validate OTP</button>
            <button onClick={handleGoBackClick}>Go back to login form</button>
          </div>
        </form>
      </div>
    );
  }

  return null;
};

export default ForgotAccount;