import styles from './CurrentBooking.module.css';
import type { Booking } from '../../types/booking';
import { Cat, Dog } from 'phosphor-react';
import { getTimeRemaining } from '../../utils/date-formatter';

interface CurrentBookingProps {
  booking: Booking;
}

export default function CurrentBooking({ booking }: CurrentBookingProps) {
  return (
    <article className={styles['booking-row']}>
      {/* Group 1: Pet */}
      <div className={styles['pet-data']}>
        <div className='icon-wrapper'>
          {booking.pet_species === 'Dog' ? <Dog size={24} /> : <Cat size={24} />}
        </div>
        <div className={styles['pet-text']}>
          <p className={styles['pet-name']}>{booking.pet_name}</p>
          <p className={styles.breed}>Breed</p>
        </div>
      </div>

      {/* Group 2: Service */}
      <div className={styles['service-info']}>
        <p className={styles.service}>{booking.service}</p>
      </div>

      {/* Group 3: Date */}
      <div className={styles['date-info']}>
        <p className={styles['booking-end']}>Until {getTimeRemaining(booking.end_date)}</p>
      </div>

      {/* Group 4: Owner */}
      <div className={styles['requester-info']}>
        <p className={styles['requester-label']}>Owner</p>
        <p className={styles['requester-name']}>{booking.requester_name}</p>
      </div>
    </article>
  );
}