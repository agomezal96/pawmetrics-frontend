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
      {icon}
      <p className={styles['number-of-pets']}>{numberOfPets}</p>
      <p>{label}</p>
    </article>
  );
}
