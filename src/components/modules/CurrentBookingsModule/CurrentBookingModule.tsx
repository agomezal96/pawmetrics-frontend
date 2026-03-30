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
        <CurrentBookingHeader />
        {booking.map((booking) => (
          <CurrentBooking booking={booking} />
        ))}
      </DashboardSection>
    </>
  );
}
