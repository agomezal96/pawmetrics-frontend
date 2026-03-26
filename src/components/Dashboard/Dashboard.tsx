import styles from './Dashboard.module.css';
import EarningsCard from '../cards/EarningsCard';
import PetNumberCard from '../cards/PetNumberCard';
import { Cat, Dog } from 'phosphor-react';
import FutureBookingCard from '../cards/FutureBookingsCard';
import { mockEarnings, mockFutureBooking } from '../../mocks/mockData';
import CurrentBooking from '../CurrentBooking';

export default function Dashboard() {
  return (
    <div className={styles['bento-grid']}>
      <EarningsCard earnings={mockEarnings} />
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
      <FutureBookingCard booking={mockFutureBooking} />
      <CurrentBooking booking={mockFutureBooking} />
    </div>
  );
}
