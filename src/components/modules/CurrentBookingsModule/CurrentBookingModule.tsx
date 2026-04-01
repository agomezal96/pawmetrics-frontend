import type { Booking } from '../../../types/booking';
import DashboardSection from '../../DashboardSection';
import BookingTableHeader from '../../BookingTableHeader';
import BookingRow from '../../BookingRow';

interface CurrentBookingProps {
  bookings: Booking[];
}

export default function CurrentBookingModule({ bookings }: CurrentBookingProps) {
  return (
    <>
      <DashboardSection sectionTitle="Current Bookings" isList={true}>
        {bookings.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">No active bookings right now.</p>
          </div>
        ) : (
          <>
            <BookingTableHeader />
            {bookings.map((booking) => (
              <BookingRow key={booking.id} booking={booking} type='current'/>
            ))}
          </>
        )}
      </DashboardSection>
    </>
  );
}
