import { useState, useEffect } from 'react';
import styles from './BookingsActivityModule.module.css';
import type { Booking } from '../../../../types/booking';
import DashboardSection from '../../../organisms/DashboardSection';
import EmptyMessage from '../../../atoms/EmptyMessage';
import BookingTable from '../../../organisms/BookingTable';
import TabButton from '../../../atoms/TabButton';

interface Props {
  current: Booking[];
  past: Booking[];
  future: Booking[];
  initialTab?: 'current' | 'past' | 'future';
}

export default function BookingsActivityModule({
  current,
  past,
  future,
  initialTab = 'current',
}: Props) {
  const [activeTab, setActiveTab] = useState<'current' | 'past' | 'future'>(
    initialTab,
  );

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
    switch (activeTab) {
      case 'current':
        if (current.length === 0) {
          return <EmptyMessage>No active bookings right now.</EmptyMessage>;
        }
        return (
          <BookingTable
            bookings={current}
            dateLabel="End date"
            timeLapse="current"
          />
        );
      case 'past':
        if (past.length === 0) {
          return <EmptyMessage>No history found.</EmptyMessage>;
        }
        return (
          <BookingTable bookings={past} dateLabel="Period" timeLapse="past" />
        );
      case 'future':
        if (future.length === 0) {
          return <EmptyMessage>No incoming bookings.</EmptyMessage>;
        }
        return (
          <BookingTable
            bookings={future}
            dateLabel="Start date"
            timeLapse="future"
          />
        );
    }
  };

  return (
    <DashboardSection
      sectionTitle={getSectionTitle()}
      isList={true}
      headerElement={
        <div className={styles['tab-switch']}>
          <TabButton
            label="Active"
            count={current.length}
            isActive={activeTab === 'current'}
            onClick={() => setActiveTab('current')}
          />
          <TabButton
            label="Upcoming"
            count={future.length}
            isActive={activeTab === 'future'}
            onClick={() => setActiveTab('future')}
          />
          <TabButton
            label="History"
            count={past.length}
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
