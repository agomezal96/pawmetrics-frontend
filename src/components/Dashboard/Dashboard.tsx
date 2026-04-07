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
  type SitterScores,
} from '../../types/dashboard';
import LoadingDashboard from '../LoadingDashboard';
import ErrorDashboard from '../ErrorDashboard/ErrorDashboard';
import { useMemo, useState } from 'react';
import PeriodSelector from '../PeriodSelector';
import PastBookingsModule from '../modules/PastBookingsModule';
import SitterCard from '../cards/SitterCard';
import SitterScoreCardModule from '../modules/SitterScoreCardModule';

export default function Dashboard() {
  const baseUrl = import.meta.env.VITE_API_METRICS_URL;
  const sitterScoresUrl = baseUrl + import.meta.env.VITE_SITTER_METRICS;
  const [period, setPeriod] = useState<DashboardPeriod>('this_month');
  const queryParams = useMemo(
    () => ({ period }), // The object I want that react remembers
    [period], //only change it if the variable 'period' changes.
  );

  function handlePeriodChange(period: DashboardPeriod) {
    setPeriod(period);
  }

  const {
    requestData: metrics,
    isLoading,
    error,
  } = useGetRequest<DashboardMetrics>(baseUrl, queryParams);

  const {
    requestData: sitterScores,
    isLoading: areSitterScoresLoading,
    error: sitterScoreError,
  } = useGetRequest<SitterScores>(sitterScoresUrl);

  console.log(sitterScores);
  if (isLoading) return <LoadingDashboard />;
  if (error) return <ErrorDashboard message={error} />;
  if (!metrics) return null;
  if (!sitterScores) return null;

  const { bookings, earnings, pets, reviews } = metrics;
  const { star_sitter_progress, global_score } = sitterScores;

  // If the period is NOT 'this_year' or 'all_time', we consider it to be a history search.
  const isHistoryMode = !['this_year', 'all_time', 'this_month'].includes(
    period,
  );

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['title-and-selector']}>
        <p className={styles['title-welcome']}>Hello, Andrea</p>
        <PeriodSelector
          currentPeriod={period}
          onPeriodChange={handlePeriodChange}
        />
      </div>
      {/* <p className={styles['p-welcome']}>
        Your stats for {period.replace('_', ' ')}
      </p> */}
      <div className={styles['bento-grid']}>
        <SitterCard globalScore={global_score} isLoading={areSitterScoresLoading} error={sitterScoreError}/>
        <SitterScoreCardModule starSitterProgress={star_sitter_progress} isLoading={areSitterScoresLoading} error={sitterScoreError} />
        <div className={styles['box-with-modules']}>
          <EarningsModule earnings={earnings} />
          <TotalPetsModule petStats={pets} />
        </div>
        {!isHistoryMode ? (
          <>
            <CurrentBookingModule bookings={bookings.current_bookings} />
          </>
        ) : (
          <PastBookingsModule bookings={bookings.past_bookings} />
        )}
        <FutureBookingsModule bookings={bookings.future_bookings} />
        <ReviewModule reviews={reviews.latest_reviews} />
      </div>
    </div>
  );
}
