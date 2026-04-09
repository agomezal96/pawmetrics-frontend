import type { Review } from '../../../../types/reviews';
import EmptyMessage from '../../../atoms/EmptyMessage';
import DashboardSection from '../../../organisms/DashboardSection';
import ReviewCard from '../../../organisms/cards/ReviewCard';

interface ReviewModuleProps {
  reviews: Review[];
  totalReviews: number;
}

export default function ReviewModule({
  reviews,
  totalReviews,
}: ReviewModuleProps) {
  const REVIEW_DISPLAY_LIMIT = 3;
  const hasMore = totalReviews > REVIEW_DISPLAY_LIMIT;
  return (
    <>
      <DashboardSection sectionTitle="Latest Reviews" showSeeAll={hasMore} totalCount={totalReviews}>
        {reviews.length === 0 ? (
          <EmptyMessage>No reviews yet. Keep up the good work!</EmptyMessage>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </DashboardSection>
    </>
  );
}
