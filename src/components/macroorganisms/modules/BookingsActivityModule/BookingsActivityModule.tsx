import { useState, useEffect } from 'react';
import styles from './BookingsActivityModule.module.css';
import DashboardSection from '../../../organisms/DashboardSection';
import EmptyMessage from '../../../atoms/EmptyMessage';
import BookingTable from '../../../organisms/BookingTable';
import TabButton from '../../../atoms/TabButton';
import type { TimeLapseType } from '../../../../types/Types';
import type { BookingStats } from '../../../../types/dashboard';

interface Props {
  bookings: BookingStats;
  initialTab?: TimeLapseType;
}

export default function BookingsActivityModule({
  initialTab = 'current',
  bookings,
}: Props) {
  const {
    past_bookings: pastBookings,
    current_bookings: currentBookings,
    future_bookings: futureBookings,
  } = bookings;

  const [activeTab, setActiveTab] = useState<TimeLapseType>(initialTab);

  const BOOKING_LIMIT = 10;

  // Which list are we currently looking?

  const activeList = {
    current: currentBookings,
    past: pastBookings,
    future: futureBookings,
  }[activeTab];

  const hasMore = activeList.length > BOOKING_LIMIT;
  const displayedBookings = activeList.slice(0, BOOKING_LIMIT);

  // Sync if the dashboard period changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const getSectionTitle = () => {
    if (activeTab === 'current') return 'Current bookings';
    if (activeTab === 'past') return 'Past bookings';
    return 'Future bookings';
  };

  const renderTabContent = () => {
    // Empty messages
    if (activeList.length === 0) {
      const emptyMessages = {
        current: 'No active bookings right now.',
        past: 'No history found.',
        future: 'No incoming bookings.',
      };
      return <EmptyMessage>{emptyMessages[activeTab]}</EmptyMessage>;
    }
    // What text will be displayed in the booking Header (date)
    const tableHeaderDateLabels = {
      current: 'End date',
      past: 'Period',
      future: 'Start date',
    };

    return (
      <BookingTable
        bookings={displayedBookings}
        dateLabel={tableHeaderDateLabels[activeTab]}
        timeLapse={activeTab}
      />
    );
  };

  return (
    <DashboardSection
      sectionTitle={getSectionTitle()}
      isList={true}
      showSeeAll={hasMore}
      totalCount={activeList.length}
      headerElement={
        <div className={styles['tab-switch']}>
          <TabButton
            label="Active"
            count={currentBookings.slice(0, BOOKING_LIMIT).length}
            isActive={activeTab === 'current'}
            onClick={() => setActiveTab('current')}
          />
          <TabButton
            label="Upcoming"
            count={futureBookings.slice(0, BOOKING_LIMIT).length}
            isActive={activeTab === 'future'}
            onClick={() => setActiveTab('future')}
          />
          <TabButton
            label="History"
            count={pastBookings.slice(0, BOOKING_LIMIT).length}
            isActive={activeTab === 'past'}
            onClick={() => setActiveTab('past')}
          />
        </div>
      }
    >
      <div className={styles['table-container']}>
        <div key={activeTab} className={styles['tab-content']}>
          {renderTabContent()}
        </div>
      </div>
    </DashboardSection>
  );
}
