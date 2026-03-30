import { Cat, Dog } from 'phosphor-react';
import type { PetStats } from '../../../types/dashboard';
import PetNumberCard from '../../cards/PetNumberCard';
import DashboardSection from '../../DashboardSection';

interface TotalPetsModuleProps {
  petStats: PetStats;
}

export default function TotalPetsModule({ petStats }: TotalPetsModuleProps) {
  return (
    <>
      <DashboardSection sectionTitle="Total pets you have sitted">
        <PetNumberCard
          icon={<Dog size={32} />}
          numberOfPets={petStats.total_dogs}
          label="Total Dogs"
        />
        <PetNumberCard
          icon={<Cat size={32} />}
          numberOfPets={petStats.total_cats}
          label="Total Cats"
        />
      </DashboardSection>
    </>
  );
}
