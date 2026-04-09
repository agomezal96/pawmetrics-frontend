export interface Review {
  id: number;
  stars: number;
  description: string | null;
  booking: number;
  created_at: string;
  requester_name: string;
  requester_name_url: string;
}
