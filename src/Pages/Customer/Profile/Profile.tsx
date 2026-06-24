import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../../services/authService';
import { useAuthStore } from '../../../store/authStore';
import type { UserProfile } from '../../../services/authService';
import './Profile.css';

// Icons
const UserIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IdIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
    <line x1="2" y1="10" x2="22" y2="10"></line>
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

export const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const data = await getUserProfile();
        setProfile(data);
      } catch (err: any) {
        console.error('Failed to fetch profile:', err);
        setError(err.message || 'Failed to load profile data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getRoleBadgeClass = (role: string) => {
    switch (role?.toLowerCase()) {
      case 'admin':
        return 'profile__role-badge profile__role-badge--admin';
      case 'customer':
        return 'profile__role-badge profile__role-badge--customer';
      default:
        return 'profile__role-badge';
    }
  };

  if (isLoading) {
    return (
      <div className="profile__loading">
        <div className="profile__loading-spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile__error">
        <div className="profile__error-icon">⚠️</div>
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button className="profile__error-btn" onClick={() => navigate('/')}>
          Go Home
        </button>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="profile">
      <div className="profile__container">

        {/* Header Card */}
        <div className="profile__header-card">
          <div className="profile__header-bg"></div>
          <div className="profile__header-content">
            <div className="profile__avatar">
              {getInitials(profile.firstName, profile.lastName)}
            </div>
            <h1 className="profile__name">
              {profile.firstName} {profile.lastName}
            </h1>
            <span className={getRoleBadgeClass(profile.role)}>
              {profile.role}
            </span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="profile__info-grid">

          {/* Email Card */}
          <div className="profile__info-card">
            <div className="profile__info-icon">
              <MailIcon />
            </div>
            <div className="profile__info-content">
              <span className="profile__info-label">Email Address</span>
              <span className="profile__info-value">{profile.email}</span>
            </div>
          </div>

          {/* Role Card */}
          <div className="profile__info-card">
            <div className="profile__info-icon">
              <ShieldIcon />
            </div>
            <div className="profile__info-content">
              <span className="profile__info-label">Account Role</span>
              <span className="profile__info-value" style={{ textTransform: 'capitalize' }}>{profile.role}</span>
            </div>
          </div>

          {/* Account ID Card */}
          <div className="profile__info-card profile__info-card--full">
            <div className="profile__info-icon">
              <IdIcon />
            </div>
            <div className="profile__info-content">
              <span className="profile__info-label">Account ID</span>
              <span className="profile__info-value profile__info-value--mono">{profile.id}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="profile__actions">
          <button className="profile__logout-btn" onClick={handleLogout}>
            <LogoutIcon />
            Sign Out
          </button>
        </div>

      </div>
    </div>
  );
};
