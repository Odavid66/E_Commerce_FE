import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FormControl } from '../../../Components/FormControl/FormControl';
import { Basebutton } from '../../../Components/button/button';

/**
 * Login Page Component
 * 
 * Allows existing users to log in with email and password.
 * Uses FormControl components for consistent styling.
 */

export const Login = () => {
  // State to hold form values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  /**
   * Validate form inputs before submission
   * @returns true if form is valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors = { email: '', password: '' };
    
    // Check if email is empty
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Check if email format is valid (basic regex: something@something.something)
      newErrors.email = 'Please enter a valid email';
    }

    // Check if password is empty
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    // Return true only if no errors
    return !newErrors.email && !newErrors.password;
  };

  /**
   * Handle login form submission
   */
  const handleLogin = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Validate before submitting
    if (validateForm()) {
      console.log('Login attempt:', { email, password });
      // TODO: Send login request to backend here
      // Example: loginUser(email, password)
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage__container">
        {/* Header */}
        <div className="LoginPage__header">
          <h1>Welcome Back</h1>
          <p>Log in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="LoginPage__form">
          {/* Email Input */}
          <FormControl
            label="Email address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            name="email"
            required={true}
            layout="inline"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          {/* Password Input */}
          <FormControl
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            name="password"
            required={true}
            layout="inline"
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          {/* Forgot Password Link */}
          <Link to="#" className="LoginPage__forgotPassword">
            Forgot Password?
          </Link>

          {/* Login Button */}
          <Basebutton
            backgroundColor="#6c5ce7"
            color="white"
            type="submit"
            onClick={() => {}}
          >
            Login
          </Basebutton>
        </form>

        {/* Sign Up Link */}
        <div className="LoginPage__footer">
          <p>
            Don't have an account?{' '}
            <Link to="/create-account" className="LoginPage__link">
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
