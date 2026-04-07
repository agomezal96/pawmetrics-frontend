import { Cat, Dog } from 'phosphor-react';
import type { Booking } from '../../../types/booking';
import styles from './FutureBookingCard.module.css';
import { formatRelativeDate } from '../../../utils/date-formatter';
import { capitalize } from '../../../utils/capitalize';

interface FutureBookingProps {
  booking: Booking;
}

export default function FutureBookingCard({ booking }: FutureBookingProps) {
  return (
    <article className={`card ${styles['future-booking-card']}`}>
      <p className={styles.date}>{formatRelativeDate(booking.start_date)}</p>
      <div className={styles['future-booking-content']}>
        <div className={styles['icon-and-name']}>
          <div className="icon-wrapper">
            {booking.pet_species === 'dog' ? (
              <Dog size={26} />
            ) : (
              <Cat size={26} />
            )}
          </div>

          <div className={styles['pet-details']}>
            <p className={styles['pet-name']}>{booking.pet_name}</p>
            <p className={styles['service']}>{capitalize(booking.service)}</p>
          </div>
        </div>
        <p className={styles.price}>+ {booking.price}$</p>
      </div>
    </article>
  );
}
