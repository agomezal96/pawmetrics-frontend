import styles from './BookingRow.module.css';
import type { Booking } from '../../types/booking';
import { Cat, Dog } from 'phosphor-react';
import {
  formatDateEnglish,
  getTimeRemaining,
} from '../../utils/date-formatter';
import { capitalize } from '../../utils/capitalize';

interface CurrentBookingProps {
  booking: Booking;
  type: 'current' | 'past';
}

export default function BookingRow({ booking, type }: CurrentBookingProps) {
  function getDateLabel() {
    if (type === 'current') {
      return `Until ${getTimeRemaining(booking.end_date)}`;
    }
    return `Started on ${formatDateEnglish(booking.start_date)} - Ended on ${formatDateEnglish(booking.end_date)}`;
  }

  return (
    <article className={styles['booking-row']}>
      {/* Group 1: Pet */}
      <div className={styles['pet-data']}>
        <div className="icon-wrapper">
          {booking.pet_species === 'dog' ? (
            <Dog size={24} />
          ) : (
            <Cat size={24} />
          )}
        </div>
        <div className={styles['pet-text']}>
          <p className={styles['pet-name']}>{booking.pet_name}</p>
          <p className={styles.breed}>{booking.pet_breed}</p>
        </div>
      </div>

      {/* Group 2: Service */}
      <div className={styles['service-info']}>
        <p className={styles.service}>{capitalize(booking.service)}</p>
      </div>

      {/* Group 3: Date */}
      <div className={styles['date-info']}>
        <p className={styles['booking-end']}>{getDateLabel()}</p>
      </div>

      {/* Group 4: Owner */}
      <div className={styles['requester-info']}>
        <p className={styles['requester-name']}>{booking.requester_name}</p>
      </div>

      {/* Group 5: Price */}
      <div className={styles['price-info']}>
        <p className={styles['price']}>{booking.price}$</p>
      </div>
    </article>
  );
}
