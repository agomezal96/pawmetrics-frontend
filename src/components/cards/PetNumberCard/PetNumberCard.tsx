import styles from './PetNumberCard.module.css';
import type { ReactNode } from 'react';

interface petNumberCardProps {
  numberOfPets: number;
  icon: ReactNode;
  label?: string;
}

export default function PetNumberCard({
  numberOfPets,
  icon,
  label,
}: petNumberCardProps) {
  return (
    <article className={`card ${styles['pet-number-card']}`}>
      <div className='icon-wrapper'>
      {icon}

      </div>
      <p className={styles['number-of-pets']}>{numberOfPets}</p>
      <p className={styles['label-text']}>{label}</p>
    </article>
  );
}
