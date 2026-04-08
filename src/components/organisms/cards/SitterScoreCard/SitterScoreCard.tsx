import type { StarSitterProgress } from '../../../../types/dashboard';
import { MetricCircle } from '../../../atoms/MetricsCircle/MetricsCircle';
import styles from './SitterScoreCard.module.css';

interface SitterRatingCardProps {
  starSitterProgress: StarSitterProgress;
  isLoading: boolean;
  error: string | null;
}

export default function SitterScoreCard({
  starSitterProgress,
  isLoading,
  error,
}: SitterRatingCardProps) {
  const {
    unique_owners,
    repeat_owners,
    unique_owners_target,
    repeat_owners_target,
    current_rating_6m,
    rating_target,
  } = starSitterProgress;

  const metrics = [
    {
      label: 'Unique Owners',
      current: unique_owners,
      target: unique_owners_target,
    },
    {
      label: 'Repeat Owners',
      current: repeat_owners,
      target: repeat_owners_target,
    },
    { label: 'Rating', current: current_rating_6m, target: rating_target },
  ];

  const completedSteps = metrics.filter((m) => m.current >= m.target).length;
  const progressPercentage = (completedSteps / metrics.length) * 100;

  return (
    <article className={`card`}>
      {isLoading && <p>Loading content...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          {' '}
          <p className={styles.description}>
            Become a Star Sitter by hosting <strong>5 unique owners</strong>,
            welcoming <strong>2 repeat clients</strong>, and maintaining a{' '}
            <strong>4.9+ rating</strong> over the last 6 months. You're just a
            few happy paws away from the badge! 🐾✨
          </p>
          <div className={styles['metrics-container']}>
            {metrics.map((metric) => (
              <MetricCircle key={metric.label} {...metric} />
            ))}
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
        </>
      )}
    </article>
  );
}
