import styles from './Dashboard.module.css';
import EarningsModule from '../modules/EarningsModule';
import TotalPetsModule from '../modules/TotalPetsModule';
import CurrentBookingModule from '../modules/CurrentBookingsModule';
import FutureBookingsModule from '../modules/FutureBookingsModule';
import ReviewModule from '../modules/ReviewModule/ReviewModule';

import useGetRequest from '../../hooks/useGetRequest';
import type { DashboardMetrics } from '../../types/dashboard';
import LoadingModule from '../modules/LoadingModule';

export default function Dashboard() {
  const baseUrl = import.meta.env.VITE_API_METRICS_URL;

  const {
    requestData: dashboardMetrics,
    isLoading,
    error,
  } = useGetRequest<DashboardMetrics>(baseUrl);

  if (isLoading) return <LoadingModule />;
  if (error) return <p>Error: {error}</p>;
  if (!dashboardMetrics) return null;

  const { bookings, earnings, pets, reviews } = dashboardMetrics;

  return (
    <div className={styles['dashboard-container']}>
      <p className={styles['title-welcome']}>Hello, Andrea</p>
      <p className={styles['p-welcome']}>
        Here you can easily track your earnings, manage upcoming bookings, and
        keep an eye on your pet stats.
      </p>
      <div className={styles['bento-grid']}>
        <EarningsModule earnings={earnings} />
        <TotalPetsModule petStats={pets} />
        <CurrentBookingModule booking={bookings.current_bookings} />
        <FutureBookingsModule bookings={bookings.future_bookings} />
        <ReviewModule reviews={reviews.latest_reviews} />
      </div>
    </div>
  );
}
