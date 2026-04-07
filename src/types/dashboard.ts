import type { Booking } from './booking';
import type { Review } from './reviews';

export type DashboardPeriod =
  | 'this_month'
  | 'all_time'
  | 'this_year'
  | 'last_month'
  | '3_months'
  | '6_months'
  | '12_months'
  | 'last_year';

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
  past_bookings: Booking[];
  current_bookings: Booking[];
  future_bookings: Booking[];
}

export interface ReviewStats {
  latest_reviews: Review[];
  total_reviews: number;
}

export interface DashboardMetrics {
  pets: PetStats;
  earnings: EarningsStats;
  bookings: BookingStats;
  reviews: ReviewStats;
}

export interface StarSitterProgress {
  unique_owners: number;
  unique_owners_target: number;
  repeat_owners: number;
  repeat_owners_target: number;
  current_rating_6m: number;
  rating_target: number;
}

export interface GlobalSitterScore {
  total_reviews: number;
  average_rating: number;
}

export interface SitterScores {
  star_sitter_progress: StarSitterProgress;
  global_score: GlobalSitterScore;
}
