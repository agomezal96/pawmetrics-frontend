import styles from './CurrentBookingHeader.module.css';

export default function CurrentBookingHeader() {
  return (
    <header className={styles['header-container']}>
      <span>Pet</span>
      <span>Service</span>
      <span>End Date</span>
      <span>Owner</span>
    </header>
  );
}
