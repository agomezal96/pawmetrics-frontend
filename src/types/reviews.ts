export interface Review {
  id: number;
  stars: number;         
  description: string | null; 
  booking: number;       
  requester_name: string;
}