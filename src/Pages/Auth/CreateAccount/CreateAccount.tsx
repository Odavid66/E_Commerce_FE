import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';
import { FormControl } from '../../../Components/FormControl/FormControl';
import { Basebutton } from '../../../Components/Button/button';

/**
 * CreateAccount Page Component
 * 
 * Allows new users to create an account.
 * Includes password confirmation and terms acceptance.
 */

export const CreateAccount = () => {
  // State for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // State for error messages
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: ''
  });

  /**
   * Validate all form fields
   * @returns true if form is valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: ''
    };

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Validate password
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Validate confirm password
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Validate terms acceptance
    if (!agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    // Return true only if ALL fields have no errors
    return (
      !newErrors.fullName &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword &&
      !newErrors.agreeToTerms
    );
  };

  /**
   * Handle account creation form submission
   */
  const handleCreateAccount = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // Validate before submitting
    if (validateForm()) {
      console.log('Account creation attempt:', {
        fullName,
        email,
        password
      });
      // TODO: Send signup request to backend here
      // Example: registerUser(fullName, email, password)
    }
  };

  return (
    <div className="CreateAccountPage">
      <div className="CreateAccountPage__container">
        {/* Header */}
        <div className="CreateAccountPage__header">
          <h1>Create Account</h1>
          <p>Join us today</p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleCreateAccount} className="CreateAccountPage__form">
          {/* Full Name Input */}
          <FormControl
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            name="fullName"
            required={true}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}

          {/* Email Input */}
          <FormControl
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            name="email"
            required={true}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          {/* Password Input */}
          <FormControl
            label="Password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            name="password"
            required={true}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          {/* Confirm Password Input */}
          <FormControl
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            required={true}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}

          {/* Terms & Conditions Checkbox */}
          <div className="CreateAccountPage__termsCheckbox">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label htmlFor="agreeTerms">
              I agree to the{' '}
              <a href="#" className="CreateAccountPage__termsLink">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.agreeToTerms && (
            <span className="error-message">{errors.agreeToTerms}</span>
          )}

          {/* Create Account Button */}
          <Basebutton
            backgroundColor="#6c5ce7"
            color="white"
            type="submit"
            onClick={() => {}} // Form submission handled by onSubmit
          >
            Create Account
          </Basebutton>
        </form>

        {/* Login Link */}
        <div className="CreateAccountPage__footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="CreateAccountPage__link">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
