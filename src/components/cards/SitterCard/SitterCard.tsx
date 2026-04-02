import { Star } from 'phosphor-react';
import styles from './SitterCard.module.css';
import avatar from '../../../assets/images/avatar.png';
import type { GlobalSitterScore } from '../../../types/dashboard';

interface SitterCardProps {
  globalScore: GlobalSitterScore;
}

export default function SitterCard({ globalScore }: SitterCardProps) {
  return (
    <article className={`card ${styles['sitter-card']}`}>
      <div className={styles['avatar-container']}>
        <img src={avatar} alt="Sitter avatar image" />
      </div>
      <div className={styles['name-and-reviews']}>
        <p className={styles['sitter-name']}>Andrea Gomez</p>
        <div className={styles.score}>
          <Star size={24} weight="fill" color="var(--star-color)" />
          <p className={styles['star-average']}>
            {globalScore.average_rating} • {globalScore.total_reviews} reviews
          </p>
        </div>
      </div>
    </article>
  );
}
