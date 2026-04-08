import styles from './BookingTableHeader.module.css';

interface BookingTableHeaderProps {
  date: string;
}

export default function BookingTableHeader({ date }: BookingTableHeaderProps) {
  return (
    <header className={styles['header-container']}>
      <span>Pet</span>
      <span>Service</span>
      <span>{date}</span>
      <span>Owner</span>
      <span>Revenue</span>
    </header>
  );
}
