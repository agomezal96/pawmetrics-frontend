import type { Booking } from '../../../types/booking';
import DashboardSection from '../../organisms/DashboardSection';
import FutureBookingCard from '../../organisms/cards/FutureBookingsCard';

interface FutureBookingProps {
  bookings: Booking[];
}

export default function FutureBookingsModule({ bookings }: FutureBookingProps) {
  return (
    <>
      <DashboardSection sectionTitle="Future Bookings" showSeeAll={true}>
        {bookings.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">No upcoming bookings scheduled.</p>
          </div>
        ) : (
          bookings.map((booking) => (
            <FutureBookingCard key={booking.id} booking={booking} />
          ))
        )}
      </DashboardSection>
    </>
  );
}
