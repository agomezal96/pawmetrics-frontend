import type { StarSitterProgress } from '../../../types/dashboard';
import SitterScoreCard from '../../cards/SitterScoreCard';
import DashboardSection from '../../DashboardSection';

interface SitterScoreCardProps {
  starSitterProgress: StarSitterProgress;
}

export default function SitterScoreCardModule({
  starSitterProgress,
}: SitterScoreCardProps) {
  return (
    <>
      <DashboardSection sectionTitle="Progress to Star Sitter">
        <SitterScoreCard starSitterProgress={starSitterProgress} />
      </DashboardSection>
    </>
  );
}
