import type { Booking } from '../../../types/booking';
import FutureBookingCard from '../../cards/FutureBookingsCard';
import DashboardSection from '../../DashboardSection';

interface FutureBookingProps {
  bookings: Booking[];
}

export default function FutureBookingsModule({ bookings }: FutureBookingProps) {
  return (
    <>
      <DashboardSection sectionTitle="Future Bookings">
        {bookings.map((booking) => (
          <FutureBookingCard booking={booking} />
        ))}
      </DashboardSection>
    </>
  );
}
