import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './profile.module.css';
import { 
  RiUser3Line, 
  RiSettingsLine, 
  RiLogoutCircleRLine,
  RiDashboardLine,
  RiArticleLine
} from 'react-icons/ri';

const ProfileCard = ({ onClose, onLogout }) => {
  const { user } = useAuth();

  const getAvatarInitials = (name) => {
    if (!name) return 'GU';
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  const handleAction = () => {
    if (onClose) onClose();
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.cardHeader}>
        <div className={styles.avatarContainer}>
          {user?.profileImage ? (
            <img 
              src={user.profileImage} 
              alt={`${user.fullName}'s profile`} 
              className={styles.avatarImage}
            />
          ) : (
            <div className={styles.avatarFallback}>
              {getAvatarInitials(user?.fullName)}
            </div>
          )}
        </div>
        
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>{user?.fullName || 'Guest User'}</h3>
          <p className={styles.userEmail}>{user?.email || 'user@example.com'}</p>
          {user?.company && (
            <p className={styles.userCompany}>
              <span className={styles.companyIcon}>🏢</span> {user.company}
            </p>
          )}
        </div>
      </div>

      <div className={styles.cardBody}>
        <Link 
          to="/dashboard" 
          className={styles.profileButton}
          onClick={handleAction}
        >
          <RiDashboardLine className={styles.buttonIcon} />
          Dashboard
        </Link>
        
        <Link 
          to="/profile" 
          className={styles.profileButton}
          onClick={handleAction}
        >
          <RiUser3Line className={styles.buttonIcon} />
          My Profile
        </Link>
        
        <Link 
          to="/my-posts" 
          className={styles.profileButton}
          onClick={handleAction}
        >
          <RiArticleLine className={styles.buttonIcon} />
          My Posts
        </Link>
        
        <Link 
          to="/settings" 
          className={styles.settingsButton}
          onClick={handleAction}
        >
          <RiSettingsLine className={styles.buttonIcon} />
          Settings
        </Link>
      </div>

      <div className={styles.cardFooter}>
        <button 
          className={styles.logoutButton}
          onClick={() => {
            onLogout();
            handleAction();
          }}
        >
          <RiLogoutCircleRLine className={styles.buttonIcon} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;