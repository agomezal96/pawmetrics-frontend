import styles from './Dashboard.module.css';
import EarningsModule from '../modules/EarningsModule';
import TotalPetsModule from '../modules/TotalPetsModule';
import ReviewModule from '../modules/ReviewModule/ReviewModule';
import useGetRequest from '../../../hooks/useGetRequest';
import {
  type DashboardPeriod,
  type DashboardMetrics,
  type SitterScores,
} from '../../../types/dashboard';
import { useMemo, useState } from 'react';
import SitterScoreCardModule from '../modules/SitterScoreCardModule';
import PeriodSelector from '../../atoms/PeriodSelector';
import SitterCard from '../../organisms/cards/SitterCard';
import ErrorDashboard from '../../organisms/ErrorDashboard/ErrorDashboard';
import LoadingDashboard from '../../organisms/LoadingDashboard';
import BookingsActivityModule from '../modules/BookingsActivityModule';
import type { TimeLapseType } from '../../../types/Types';

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

  const tabByPeriod: Record<DashboardPeriod, TimeLapseType> = {
    'this_month': 'current',
    'all_time': 'current',
    'this_year': 'current',
    'last_month': 'past',
    '3_months': 'past',
    '6_months': 'past',
    '12_months': 'past',
    'last_year': 'past',
  };

  const defaultActivityTab = tabByPeriod[period] || 'current';

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

        {/* 1. TABS: Current vs Past (Unified for stability) */}
      <BookingsActivityModule
        current={bookings.current_bookings} 
        past={bookings.past_bookings} 
        future={bookings.future_bookings}
        initialTab={defaultActivityTab}
      />
        <ReviewModule reviews={reviews.latest_reviews} />
      </div>
    </div>
  );
}
