import type { Booking } from '../../../types/booking';
import type { TimeLapseType } from '../../../types/Types';
import { bookingServiceFormatter } from '../../../utils/booking-service-formatter';
import { cleanFloat } from '../../../utils/clean-float';
import {
  formatDateEnglish,
  getTimeRemaining,
} from '../../../utils/date-formatter';
import styles from './BookingRow.module.css';
import { Cat, Dog } from 'phosphor-react';

interface BookingRowProps {
  booking: Booking;
  timeLapse: TimeLapseType;
}

export default function BookingRow({ booking, timeLapse }: BookingRowProps) {
  function getDateLabel() {
    if (timeLapse === 'current') {
      return `Until ${getTimeRemaining(booking.end_date)}`;
    } else if (timeLapse === 'past') {
      return `Started on ${formatDateEnglish(booking.start_date)} - Ended on ${formatDateEnglish(booking.end_date)}`;
    } else {
      return `${getTimeRemaining(booking.start_date)}`;
    }
  }

  return (
    <article className={styles['booking-row']}>
      {/* Group 1: Pet */}
      <div className={styles['pet-data']}>
        {booking.pet_image_url ? (
          <div className={styles['avatar-container']}>
            <img
              src={booking.pet_image_url}
              alt={`${booking.pet_name}'s avatar`}
            />
          </div>
        ) : (
          <div className="icon-wrapper">
            {booking.pet_species === 'dog' ? (
              <Dog size={32} />
            ) : (
              <Cat size={32} />
            )}
          </div>
        )}
        <div className={styles['pet-text']}>
          <p className={styles['pet-name']}>{booking.pet_name}</p>
          <p className={styles.breed}>{booking.pet_breed}</p>
        </div>
      </div>

      {/* Group 2: Service */}
      <div className={styles['service-info']}>
        <p className={styles.service}>
          {bookingServiceFormatter(booking.service)}
        </p>
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
        <p className={styles['price']}>{cleanFloat(booking.price)}$</p>
      </div>
    </article>
  );
}
