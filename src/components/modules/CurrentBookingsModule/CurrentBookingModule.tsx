import type { Booking } from '../../../types/booking';
import DashboardSection from '../../DashboardSection';
import BookingTableHeader from '../../BookingTableHeader';
import BookingRow from '../../BookingTableRow';

interface CurrentBookingProps {
  booking: Booking[];
}

export default function CurrentBookingModule({ booking }: CurrentBookingProps) {
  return (
    <>
      <DashboardSection sectionTitle="Current Bookings" isList={true}>
        {booking.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">No active bookings right now.</p>
          </div>
        ) : (
          <>
            <BookingTableHeader />
            {booking.map((booking) => (
              <BookingRow key={booking.id} booking={booking} type='current'/>
            ))}
          </>
        )}
      </DashboardSection>
    </>
  );
}
