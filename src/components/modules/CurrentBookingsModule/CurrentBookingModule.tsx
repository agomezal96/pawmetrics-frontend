import type { Booking } from '../../../types/booking';
import CurrentBooking from '../../CurrentBooking';
import CurrentBookingHeader from '../../CurrentBookingHeader';
import DashboardSection from '../../DashboardSection';

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
            <CurrentBookingHeader />
            {booking.map((booking) => (
              <CurrentBooking key={booking.id} booking={booking} />
            ))}
          </>
        )}
      </DashboardSection>
    </>
  );
}
