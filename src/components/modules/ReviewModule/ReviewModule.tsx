import type { Review } from '../../../types/reviews';
import ReviewCard from '../../cards/ReviewCard';
import DashboardSection from '../../DashboardSection';

interface ReviewModuleProps {
  reviews: Review[];
}

export default function ReviewModule({ reviews }: ReviewModuleProps) {
  return (
    <>
      <DashboardSection sectionTitle="Reviews">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </DashboardSection>
    </>
  );
}
