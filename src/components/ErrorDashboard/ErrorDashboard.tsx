import styles from './ErrorDashboard.module.css';

interface ErrorDashboardProps {
  message?: string;
}

export default function ErrorDashboard({ message }: ErrorDashboardProps) {
  const handleRetry = () => {
    window.location.reload();
  };
  return (
    <div className={styles['error-container']}>
      <div className={styles['error-icon']}>⚠️</div>
      <h2 className={styles['error-title']}>Oops! Something went wrong</h2>

      {message && <p className={styles['error-message']}>{message}</p>}

      <button className={styles['retry-button']} onClick={handleRetry}>
        Try again
      </button>

      <span className={styles['error-footer']}>
        If the problem persists, please contact support.
      </span>
    </div>
  );
}
