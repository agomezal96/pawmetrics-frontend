import { Star } from 'phosphor-react';
import styles from './SitterCard.module.css';
import avatar from '../../../assets/images/avatar.png';

interface SitterCardProps {}

export default function SitterCard(SitterCardProps) {
  return (
    <article className={`card ${styles['sitter-card']}`}>
      <div className={styles['avatar-container']}>
        <img src={avatar} alt="Sitter avatar image" />
      </div>
      <p className={styles['sitter-name']}>Andrea Gomez</p>

      <div className={styles.score}>
        <Star size={24} weight="fill" color="var(--star-color)" />
        <p className={styles['star-average']}>4.7 • 4 reviews</p>
      </div>
    </article>
  );
}
