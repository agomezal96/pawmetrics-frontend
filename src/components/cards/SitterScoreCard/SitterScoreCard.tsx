import type { StarSitterProgress } from '../../../types/dashboard';
import styles from './SitterScoreCard.module.css';

interface SitterRatingCardProps {
  starSitterProgress: StarSitterProgress;
}

export default function SitterRatingCard({
  starSitterProgress,
}: SitterRatingCardProps) {
  const {
    unique_owners,
    repeat_owners,
    unique_owners_target,
    repeat_owners_target,
    current_rating_6m,
    rating_target,
  } = starSitterProgress;

  const criteria = [
    unique_owners >= unique_owners_target,
    repeat_owners >= repeat_owners_target,
    current_rating_6m >= rating_target,
  ];

  const completedSteps = criteria.filter((item) => Boolean(item)).length;
  const progressPercentage = (completedSteps / criteria.length) * 100;

  return (
    <article className={`card`}>
      <div className={styles['metrics-container']}>
        {/* Unique Owners */}
        <div className={styles.metric}>
          <div
            className={`${styles.circle} ${criteria[0] ? styles.active : ''}`}
          >
            {unique_owners}/{unique_owners_target}
          </div>
          <p>Unique Owners</p>
        </div>

        {/* Repeat Owners */}
        <div className={styles.metric}>
          <div
            className={`${styles.circle} ${criteria[1] ? styles.active : ''}`}
          >
            {repeat_owners}/{repeat_owners_target}
          </div>
          <p>Repeat Owners</p>
        </div>

        {/* Rating */}
        <div className={styles.metric}>
          <div
            className={`${styles.circle} ${criteria[2] ? styles.active : ''}`}
          >
            {current_rating_6m}/{rating_target}
          </div>
          <p>Rating</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles['progress-bar-bg']}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className={styles.progressText}>{completedSteps}/3</span>
      </div>
    </article>
  );
}
