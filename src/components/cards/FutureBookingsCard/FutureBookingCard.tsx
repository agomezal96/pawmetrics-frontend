import { Cat, Dog } from 'phosphor-react';
import type { Booking } from '../../../types/booking';
import styles from './FutureBookingCard.module.css';

interface FutureBookingProps {
  booking: Booking;
}

export default function FutureBookingCard({ booking }: FutureBookingProps) {
  return (
    <article className="card">
      <p className={styles.date}>{booking.start_date}</p>
      <div className={styles['future-booking-content']}>
        <div className={styles['icon-and-name']}>
          <div className={styles['icon-wrapper']}>
            {booking.pet_species === 'Dog' ? (
              <Dog size={26} weight="bold" />
            ) : (
              <Cat size={26} weight="bold" />
            )}
          </div>

          <div className={styles['pet-details']}>
            <p className={styles['pet-name']}>{booking.pet_name}</p>
            <p className={styles['service']}>{booking.service}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
