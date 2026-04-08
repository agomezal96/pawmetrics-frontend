import type { Review } from '../../../../types/reviews';
import { formatRelativeDate } from '../../../../utils/date-formatter';
import styles from './ReviewCard.module.css';
import { User } from 'phosphor-react';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={`card ${styles['review-card']}`}>
      <header className={styles['review-header']}>
        <div className={styles['avatar-and-name']}>
          <div className={styles['avatar-container']}>
            <User size={32} />
          </div>
          <p className={styles['requester-name']}>{review.requester_name}</p>
        </div>
        <p className={styles['publish-date']}>{formatRelativeDate(review.created_at)}</p>
      </header>
      <p className={styles.description}>{review.description}</p>
    </article>
  );
}
