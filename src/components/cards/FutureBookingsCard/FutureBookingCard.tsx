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
      <div className={styles['future-booking-card']}>
        <div>
          <div className={styles['icon-and-name']}>
            <span>
              {booking.pet_species === 'Dog' ? (
                <Dog size={24} />
              ) : (
                <Cat size={24} />
              )}
            </span>
            <div>
              <p className={styles['pet-name']}>{booking.pet_name}</p>
              <p className={styles['service']}>{booking.service}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
