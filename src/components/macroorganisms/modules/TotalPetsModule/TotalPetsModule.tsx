import styles from './TotalPetsModule.module.css'

import { Cat, Dog } from 'phosphor-react';
import type { PetStats } from '../../../../types/dashboard';
import DashboardSection from '../../../organisms/DashboardSection';
import PetNumberCard from '../../../organisms/cards/PetNumberCard';

interface TotalPetsModuleProps {
  petStats: PetStats;
}

export default function TotalPetsModule({ petStats }: TotalPetsModuleProps) {
  return (
    <>
      <DashboardSection sectionTitle="Total pets">
        <div className={`card ${styles['content-box']}`}>
          <PetNumberCard
            icon={<Dog size={32} />}
            numberOfPets={petStats.total_dogs}
            label="Dogs"
          />
          <PetNumberCard
            icon={<Cat size={32} />}
            numberOfPets={petStats.total_cats}
            label="Cats"
          />
        </div>
      </DashboardSection>
    </>
  );
}
