import type { StarSitterProgress } from '../../../types/dashboard';
import SitterScoreCard from '../../cards/SitterScoreCard';
import DashboardSection from '../../DashboardSection';

interface SitterScoreCardProps {
  starSitterProgress: StarSitterProgress;
  isLoading: boolean;
  error: string | null;
}

export default function SitterScoreCardModule({
  starSitterProgress, isLoading, error
}: SitterScoreCardProps) {
  return (
    <>
      <DashboardSection sectionTitle="Progress to Star Sitter">
        <SitterScoreCard starSitterProgress={starSitterProgress} isLoading={isLoading} error={error}/>
      </DashboardSection>
    </>
  );
}
