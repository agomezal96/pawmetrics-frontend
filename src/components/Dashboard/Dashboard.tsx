import styles from './Dashboard.module.css';
import {
  mockEarnings,
  mockFutureBooking,
  mockReview,
  mockTotalPets,
} from '../../mocks/mockData';
import EarningsModule from '../modules/EarningsModule';
import TotalPetsModule from '../modules/TotalPetsModule';
import CurrentBookingModule from '../modules/CurrentBookingsModule';
import FutureBookingsModule from '../modules/FutureBookingsModule';
import ReviewModule from '../modules/ReviewModule/ReviewModule';

export default function Dashboard() {
  return (
    <div className={styles['dashboard-container']}>
      <p className={styles['title-welcome']}>Hello, Andrea</p>
      <p className={styles['p-welcome']}>
        Here you can easily track your earnings, manage upcoming bookings, and
        keep an eye on your pet stats.
      </p>
      <div className={styles['bento-grid']}>
        <EarningsModule earnings={mockEarnings} />
        <TotalPetsModule petStats={mockTotalPets} />
        <CurrentBookingModule
          booking={[mockFutureBooking, mockFutureBooking, mockFutureBooking]}
        />
        <FutureBookingsModule
          bookings={[mockFutureBooking, mockFutureBooking, mockFutureBooking]}
        />
        <ReviewModule reviews={[mockReview, mockReview, mockReview]} />
      </div>
    </div>
  );
}
