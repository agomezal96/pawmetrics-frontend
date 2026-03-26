import type { Booking } from "./booking";
import type { Review } from "./reviews";

export interface PetStats {
  total_dogs: number;
  total_cats: number;
  total_pets: number;
}

export interface EarningsStats {
  past_earnings: number;
  future_earnings: number;
}

export interface BookingStats {
  current_bookings: Booking[];
  future_bookings: Booking[];
}

export interface ReviewStats {
  latest_reviews: Review[]; 
}

export interface DashboardMetrics {
  pets: PetStats;
  earnings: EarningsStats;
  bookings: BookingStats;
  reviews: ReviewStats;
}