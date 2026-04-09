import { User } from 'phosphor-react';
import type { Review } from '../../../../types/reviews';
import { formatRelativeDate } from '../../../../utils/date-formatter';
import styles from './ReviewCard.module.css';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={`card ${styles['review-card']}`}>
      <header className={styles['review-header']}>
        <div className={styles['avatar-and-name']}>
          {review.requester_image_url ? (
            <div className={styles['avatar-container']}>
              <img
                src={review.requester_image_url}
                alt={`${review.requester_name}'s avatar`}
              />
            </div>
          ) : (
            <div className="icon-wrapper">
              <User size={32}/>
            </div>
          )}

          <p className={styles['requester-name']}>{review.requester_name}</p>
        </div>
        <p className={styles['publish-date']}>
          {formatRelativeDate(review.created_at)}
        </p>
      </header>
      <p className={styles.description}>{review.description}</p>
    </article>
  );
}
