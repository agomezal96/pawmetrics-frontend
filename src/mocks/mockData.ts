import type { Booking } from "../types/booking";
import type { EarningsStats } from "../types/dashboard";
import type { Review } from "../types/reviews";

const mockEarnings: EarningsStats = {
  past_earnings: 1200,
  future_earnings: 250,
};

const mockFutureBooking: Booking = {
  id: 2,
  service: 'Boarding',
  start_date: '2026-04-19T00:00:00Z',
  end_date: '2026-04-25T00:00:00Z',
  price: '160.00',
  created_at: '2026-03-25T00:00:00Z',
  pet: 1,
  pet_name: 'Nana',
  pet_species: 'Cat',
  requester_name: 'Rossana Liendo',
};

const mockReview: Review = {
  id: 1,
  stars: 5,
  description: "Nana was very happy when she came back at home. Thank you very much for taking care of her 💕",
  booking: 2,
  requester_name: 'Rossana Liendo'
}

export {mockEarnings, mockFutureBooking, mockReview}