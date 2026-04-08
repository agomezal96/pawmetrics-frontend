import type { Review } from '../../../types/reviews';
import DashboardSection from '../../DashboardSection';
import ReviewCard from '../../organisms/cards/ReviewCard';

interface ReviewModuleProps {
  reviews: Review[];
}

export default function ReviewModule({ reviews }: ReviewModuleProps) {
  return (
    <>
      <DashboardSection sectionTitle="Reviews" showSeeAll={true}>
        {reviews.length === 0 ? (
          <div className="empty-container">
            <p className="empty-text">No reviews received.</p>
          </div>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </DashboardSection>
    </>
  );
}
