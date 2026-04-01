import type { Booking } from '../../../types/booking';
import BookingTableHeader from '../../BookingTableHeader';
import BookingRow from '../../BookingTableRow';
import DashboardSection from '../../DashboardSection';

interface PastBookingsModuleProps {
  bookings: Booking[];
}

export default function PastBookingsModule({
  bookings,
}: PastBookingsModuleProps) {
  return (
    <>
      <DashboardSection sectionTitle="Current Bookings" isList={true}>
        {bookings.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">No history found for this period.</p>
          </div>
        ) : (
          <>
            <BookingTableHeader />
            {bookings.map((booking) => (
              <BookingRow key={booking.id} booking={booking} type="past" />
            ))}
          </>
        )}
      </DashboardSection>
    </>
  );
}
