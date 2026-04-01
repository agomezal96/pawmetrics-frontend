import styles from './BookingTableHeader.module.css';

export default function BookingTableHeader() {
  return (
    <header className={styles['header-container']}>
      <span>Pet</span>
      <span>Service</span>
      <span>End Date</span>
      <span>Owner</span>
      <span>Revenue</span>
    </header>
  );
}
