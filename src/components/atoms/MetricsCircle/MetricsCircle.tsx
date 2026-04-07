// MetricCircle.tsx
import styles from './MetricsCircle.module.css';

interface MetricCircleProps {
  label: string;
  current: number;
  target: number;
}

export const MetricCircle = ({ label, current, target }: MetricCircleProps) => {
  const isCompleted = current >= target;

  return (
    <div className={styles.metric}>
      <div className={`${styles.circle} ${isCompleted ? styles.active : ''}`}>
        {current}/{target}
      </div>
      <p>{label}</p>
    </div>
  );
};