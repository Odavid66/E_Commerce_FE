import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';
import { FormControl } from '../../../Components/FormControl/FormControl';
import { Basebutton } from '../../../Components/Button/button';

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });

  const validateForm = (): boolean => {
    const newErrors = { fullName: '', email: '', password: '', confirmPassword: '' };

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.password && !newErrors.confirmPassword;
  };

  const handleCreateAccount = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Account creation attempt:', { fullName, email, password });
    }
  };

  const getPasswordStrength = () => {
    let score = 0;
    if (password.length > 5) score += 1;
    if (password.length > 7) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    return score;
  };

  const strengthScore = getPasswordStrength();

  return (
    <div className="CreateAccountPage">
      <div className="CreateAccountPage__container">
        <div className="CreateAccountPage__header">
          <h1>Join NexusStore</h1>
          <p>The infrastructure for your modern commerce journey.</p>
        </div>

        <form onSubmit={handleCreateAccount} className="CreateAccountPage__form">
          <FormControl
            label="FULL NAME"
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            name="fullName"
            layout="vertical"
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}

          <FormControl
            label="EMAIL ADDRESS"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            name="email"
            layout="vertical"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <FormControl
            label="PASSWORD"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            name="password"
            layout="vertical"
            rightIcon={
              <div onClick={() => setShowPassword(!showPassword)} style={{cursor: 'pointer'}}>
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </div>
            }
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          {password.length > 0 && (
            <div className="PasswordStrength">
              <div className="PasswordStrength__bars">
                <div className={`PasswordStrength__bar ${strengthScore > 0 ? 'active' : ''}`}></div>
                <div className={`PasswordStrength__bar ${strengthScore > 1 ? 'active' : ''}`}></div>
                <div className={`PasswordStrength__bar ${strengthScore > 2 ? 'active' : ''}`}></div>
                <div className={`PasswordStrength__bar ${strengthScore > 3 ? 'active' : ''}`}></div>
              </div>
              {strengthScore > 2 && (
                <div className="PasswordStrength__text">
                  <CheckCircleIcon /> Strong password
                </div>
              )}
            </div>
          )}

          <FormControl
            label="CONFIRM PASSWORD"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            layout="vertical"
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

          <Basebutton
            backgroundColor="#4F46E5"
            color="white"
            type="submit"
          >
            Create Account
          </Basebutton>
        </form>

        <div className="CreateAccountPage__divider">
          OR JOIN WITH
        </div>

        <div className="CreateAccountPage__social">
          <button type="button" className="SocialButton">
            <GoogleIcon /> Google
          </button>
          <button type="button" className="SocialButton">
            <GithubIcon /> GitHub
          </button>
        </div>

        <div className="CreateAccountPage__footer">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="CreateAccountPage__link">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};