// src/types/booking.ts

import type { PetSpeciesType, ServiceType } from "./types";


export interface Booking {
  id: number;
  service: ServiceType;
  start_date: string;    // It comes as ISO String: "2026-04-19T00:00:00Z"
  end_date: string;      // It comes as ISO String
  price: string;         // Django sends it as a String "160.00"
  created_at: string;
  pet: number;           
  pet_name: string;
  pet_species: PetSpeciesType;
  requester_name: string;
}