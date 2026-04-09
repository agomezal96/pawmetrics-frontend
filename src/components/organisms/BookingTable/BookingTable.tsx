import type { Booking } from '../../../types/booking';
import type { TimeLapseType } from '../../../types/Types';
import BookingRow from '../../molecules/BookingRow';
import BookingTableHeader from '../../molecules/BookingTableHeader';
import styles from './BookingTable.module.css';

interface BookingTableProps {
  bookings: Booking[];
  dateLabel: string;
  timeLapse: TimeLapseType;
}

export default function BookingTable({
  bookings,
  dateLabel,
  timeLapse,
}: BookingTableProps) {
  return (
    <div className={styles['booking-table']}>
      <BookingTableHeader dateLabel={dateLabel} />
      {bookings.map((b: Booking) => (
        <BookingRow key={b.id} booking={b} timeLapse={timeLapse} />
      ))}
    </div>
  );
}
