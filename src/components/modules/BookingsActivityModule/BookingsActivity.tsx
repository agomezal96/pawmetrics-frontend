import { useState, useEffect } from 'react';
import styles from './BookingsActivity.module.css';
import type { Booking } from '../../../types/booking';
import DashboardSection from '../../organisms/DashboardSection';
import BookingRow from '../../molecules/BookingRow';
import BookingTableHeader from '../../molecules/BookingTableHeader';

interface Props {
  current: Booking[];
  past: Booking[];
  initialTab?: 'current' | 'past';
}

export default function BookingsActivity({
  current,
  past,
  initialTab = 'current',
}: Props) {
  const [activeTab, setActiveTab] = useState<'current' | 'past'>(initialTab);

  // Sync if the dashboard period changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <DashboardSection
      sectionTitle={
        activeTab === 'current' ? 'Current Bookings' : 'Past Bookings'
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
          {activeTab === 'current' ? (
            current.length === 0 ? (
              <div className="empty-container">
                <p className="empty-text">No active bookings right now.</p>
              </div>
            ) : (
              <div className={styles['booking-table']}>
                <BookingTableHeader />
                {current.map((b) => (
                  <BookingRow key={b.id} booking={b} type="current" />
                ))}
              </div>
            )
          ) : past.length === 0 ? (
            <div className="empty-container">
              <p className="empty-text">No history found for this period.</p>
            </div>
          ) : (
            <div className={styles['booking-table']}>
              <BookingTableHeader />
              {past.map((b) => (
                <BookingRow key={b.id} booking={b} type="past" />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardSection>
  );
}
