import { useAuth } from '../../contexts/AuthContext';
import styles from './Auth.module.scss';

export const Auth = () => {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <div className={styles.auth}>
      {user ? (
        <div className={styles.userInfo}>
          <img 
            src={user.photoURL || ''} 
            alt={user.displayName || 'User'} 
            className={styles.avatar}
          />
          <span>{user.displayName}</span>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}; 