import styles from './CurrentBooking.module.css';
import type { Booking } from '../../types/booking';
import { Cat, Dog } from 'phosphor-react';

interface CurrentBookingProps {
  booking: Booking;
}

export default function CurrentBooking({ booking }: CurrentBookingProps) {
  return (
    <section className={styles['booking-info']}>
      <div className={styles['pet-data']}>
        <span>
          {booking.pet_species === 'Dog' ? (
            <Dog size={24} />
          ) : (
            <Cat size={24} />
          )}
        </span>
        <p className={styles['pet-name']}>{booking.pet_name}</p>
        <p className={styles.breed}>Breed</p>
      </div>

      <div>
        <p className={styles.service}>{booking.service}</p>
      </div>

      <div>
        <p className={styles['booking-end']}>Until {booking.end_date}</p>
      </div>

      <div className={styles['requester-name']}>{booking.requester_name}</div>
    </section>
  );
}
