import { useState, useEffect } from 'react';
import styles from './BookingsActivityModule.module.css';
import type { Booking } from '../../../../types/booking';
import DashboardSection from '../../../organisms/DashboardSection';
import BookingRow from '../../../molecules/BookingRow';
import BookingTableHeader from '../../../molecules/BookingTableHeader';

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
          return (
            <div className="empty-container">
              <p className="empty-text">No active bookings right now.</p>
            </div>
          );
        }
        return (
          <div className={styles['booking-table']}>
            <BookingTableHeader date={'End date'} />
            {current.map((b) => (
              <BookingRow key={b.id} booking={b} type="current" />
            ))}
          </div>
        );
      case 'past':
        if (past.length === 0) {
          return (
            <div className="empty-container">
              <p className="empty-text">No history found.</p>
            </div>
          );
        }
        return (
          <div className={styles['booking-table']}>
            <BookingTableHeader date={'Period'} />
            {past.map((b) => (
              <BookingRow key={b.id} booking={b} type="past" />
            ))}
          </div>
        );
      case 'future':
        if (future.length === 0) {
          return (
            <div className="empty-container">
              <p className="empty-text">No incoming bookings.</p>
            </div>
          );
        }
        return (
          <div className={styles['booking-table']}>
            <BookingTableHeader date={'Start date'} />
            {future.map((b) => (
              <BookingRow key={b.id} booking={b} type="future" />
            ))}
          </div>
        );
    }
  };

  return (
    <DashboardSection
      sectionTitle={
        getSectionTitle()
      }
      isList={true}
      headerElement={
        <div className={styles['tab-switch']}>
          <button
            className={activeTab === 'current' ? styles.active : ''}
            onClick={() => setActiveTab('current')}
          >
            Active ({current.length})
          </button>
          <button
            className={activeTab === 'future' ? styles.active : ''}
            onClick={() => setActiveTab('future')}
          >
            Upcoming ({future.length})
          </button>
          <button
            className={activeTab === 'past' ? styles.active : ''}
            onClick={() => setActiveTab('past')}
          >
            History ({past.length})
          </button>
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
