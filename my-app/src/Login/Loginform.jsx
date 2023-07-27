import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/login.css';
import CreateAccount from './createAccount';
import ForgotAccount from './forgotAccount';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username and password
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }

    if (username.length < 7 || password.length < 7) {
      alert('Username and password should be at least 7 characters long.');
      return;
    }

    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Navigate to the main page
    navigate('/main');
  };

  const showLoginForm = () => {
    setShowCreateAccountForm(false);
    setShowForgotPasswordForm(false);
  };

  // eslint-disable-next-line
  const showForgotPassword = () => {
    setShowForgotPasswordForm(true);
    setShowCreateAccountForm(false);
  };

  const hideForgotPassword = () => {
    setShowForgotPasswordForm(false);
  };

  if (showCreateAccountForm) {
    return <CreateAccount showLoginForm={showLoginForm} />;
  }

  if (showForgotPasswordForm) {
    return <ForgotAccount hideForgotPassword={hideForgotPassword} />;
  }

  return (
    <div className="container">
      <div className="login-container">
        <h1>Task Manager</h1>
        <h3>Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
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

          <label htmlFor="password">Password:</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <input type="submit" value="Login" className="animated-button" />
          <br />
          <Link to="/forgot-password" className="animated-link">Forgot Password?</Link>
          <Link to="/create-account" className="animated-link">Create new account</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
