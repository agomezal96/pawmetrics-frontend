import type { StarSitterProgress } from '../../../types/dashboard';
import DashboardSection from '../../organisms/DashboardSection';
import SitterScoreCard from '../../organisms/cards/SitterScoreCard';

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
