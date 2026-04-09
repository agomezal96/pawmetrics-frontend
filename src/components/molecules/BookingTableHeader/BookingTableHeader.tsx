import styles from './BookingTableHeader.module.css';

interface BookingTableHeaderProps {
  dateLabel: string;
}

export default function BookingTableHeader({ dateLabel }: BookingTableHeaderProps) {
  return (
    <header className={styles['header-container']}>
      <span>Pet</span>
      <span>Service</span>
      <span>{dateLabel}</span>
      <span>Owner</span>
      <span>Revenue</span>
    </header>
  );
}
