import Button from '../Button';
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
      <Button onClick={handleRetry}>Try again</Button>

      <span className={styles['error-footer']}>
        If the problem persists, please contact support.
      </span>
    </div>
  );
}
