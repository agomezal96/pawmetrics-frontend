import styles from './Dashboard.module.css';
import EarningsModule from '../modules/EarningsModule';
import TotalPetsModule from '../modules/TotalPetsModule';
import CurrentBookingModule from '../modules/CurrentBookingsModule';
import FutureBookingsModule from '../modules/FutureBookingsModule';
import ReviewModule from '../modules/ReviewModule/ReviewModule';

import useGetRequest from '../../hooks/useGetRequest';
import {
  type DashboardPeriod,
  type DashboardMetrics,
} from '../../types/dashboard';
import LoadingDashboard from '../LoadingDashboard';
import ErrorDashboard from '../ErrorDashboard/ErrorDashboard';
import { useMemo, useState } from 'react';
import PeriodSelector from '../PeriodSelector';

export default function Dashboard() {
  const baseUrl = import.meta.env.VITE_API_METRICS_URL;
  const [period, setPeriod] = useState<DashboardPeriod>('this_year');
  const queryParams = useMemo(
    () => ({ period }), // The object I want that react remembers
    [period], //only change it if the variable 'period' changes.
  );

  function handlePeriodChange(period) {
    setPeriod(period);
  }

  const {
    requestData: metrics,
    isLoading,
    error,
  } = useGetRequest<DashboardMetrics>(baseUrl, queryParams);

  console.log(metrics);
  if (isLoading) return <LoadingDashboard />;
  if (error) return <ErrorDashboard message={error} />;
  if (!metrics) return null;

  const { bookings, earnings, pets, reviews } = metrics;

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['title-and-selector']}>
        <p className={styles['title-welcome']}>Hello, Andrea</p>
        <PeriodSelector
          currentPeriod={period}
          onPeriodChange={handlePeriodChange}
        />
      </div>
      <p className={styles['p-welcome']}>
        Your stats for {period.replace('_', ' ')}
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
