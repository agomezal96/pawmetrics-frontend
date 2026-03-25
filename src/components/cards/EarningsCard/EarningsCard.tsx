import type { Earnings } from '../../../types/Types';
import styles from './EarningsCard.module.css';

interface EarningsCardProps {
  earnings: Earnings;
}

export default function EarningsCard({ earnings }: EarningsCardProps) {
  return (
    <article className={`card ${styles['earning-card']}`}>
      <h2 className="card-title">Earnings Summary</h2>
      <section className={styles['box-content']}>
        <div className={styles['earning-box']}>
          <h3>Current</h3>
          <p className={styles['current-earnings']}>{earnings.past_earnings}$</p>
        </div>
        <div className={styles['earning-box']}>
          <h3>Pending</h3>
          <p className={styles['pending-earnings']}>{earnings.future_earnings}$</p>
        </div>
      </section>
      <p className="time">This year</p>
    </article>
  );
}
