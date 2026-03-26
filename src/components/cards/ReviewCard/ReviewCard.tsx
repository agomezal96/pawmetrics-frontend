import styles from './ReviewCard.module.css';
import type { Review } from '../../../types/reviews';
import avatar from '../../../assets/images/cartoon-dog.png';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={`card ${styles['review-card']}`}>
      <div className={styles['avatar-and-name']}>
        <div className={styles['avatar-container']}>
          <img src={avatar} alt="Avatar picture" />
        </div>
        <p className={styles['requester-name']}>{review.requester_name}</p>
      </div>
      <p className={styles.description}>{review.description}</p>
    </article>
  );
}
