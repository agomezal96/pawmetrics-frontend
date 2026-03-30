import styles from './Dashboard.module.css';
import EarningsCard from '../cards/EarningsCard';
import PetNumberCard from '../cards/PetNumberCard';
import { Cat, Dog } from 'phosphor-react';
import FutureBookingCard from '../cards/FutureBookingsCard';
import {
  mockEarnings,
  mockFutureBooking,
  mockReview,
} from '../../mocks/mockData';
import CurrentBooking from '../CurrentBooking';
import ReviewCard from '../cards/ReviewCard';
import DashboardSection from '../DashboardSection';

export default function Dashboard() {
  return (
    <div className={styles['dashboard-container']}>
      <p className={styles['title-welcome']}>Hello, Andrea</p>
      <p className={styles['p-welcome']}>
        Here you can easily track your earnings, manage upcoming bookings, and
        keep an eye on your pet stats.
      </p>
      <div className={styles['bento-grid']}>
        <DashboardSection sectionTitle='Earnings summary'>
          <EarningsCard earnings={mockEarnings} />
        </DashboardSection>
        <DashboardSection sectionTitle="Total pets you have sitted">
          <PetNumberCard
            icon={<Dog size={32} />}
            numberOfPets={4}
            label="Total Dogs"
          />
          <PetNumberCard
            icon={<Cat size={32} />}
            numberOfPets={6}
            label="Total Cats"
          />
        </DashboardSection>
        <DashboardSection sectionTitle="Current Bookings">
          <CurrentBooking booking={mockFutureBooking} />
          <CurrentBooking booking={mockFutureBooking} />{' '}
          <CurrentBooking booking={mockFutureBooking} />
        </DashboardSection>
        <DashboardSection sectionTitle="Future Bookings">
          <FutureBookingCard booking={mockFutureBooking} />
        </DashboardSection>
        <DashboardSection sectionTitle="Reviews">
          <ReviewCard review={mockReview} />
          <ReviewCard review={mockReview} />
          <ReviewCard review={mockReview} />
        </DashboardSection>
      </div>
    </div>
  );
}
