import type { PetSpeciesType } from "./Types";

export interface Pet {
      id: number;
      name: string;
      species: PetSpeciesType;
      requester: string;
      requester_name: string;
}