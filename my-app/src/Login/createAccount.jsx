import React, { useState } from 'react';
import '../Login/Create.css';

const CreateAccount = ({ showLoginForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    showLoginForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform account creation logic here
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />

        <label htmlFor="password">Password:</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <label htmlFor="confirmPassword">Re-enter Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter your password" />

        <input type="submit" value="Create Account" />
      </form>

      <div className="links">
        <a href="/">Forgot Password?</a>
        <a href="/" onClick={handleLoginClick}>
          Already have an account? Login
        </a>
      </div>
    </div>
  );
};

export default CreateAccount;