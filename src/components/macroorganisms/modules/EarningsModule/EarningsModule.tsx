import type { EarningsStats } from '../../../../types/dashboard';
import DashboardSection from '../../../organisms/DashboardSection';
import EarningsCard from '../../../organisms/cards/EarningsCard';

interface EarningsModuleProps {
  earnings: EarningsStats;
}

export default function EarningsModule({ earnings }: EarningsModuleProps) {
  return (
    <>
      <DashboardSection sectionTitle="Earnings summary">
        <EarningsCard earnings={earnings} />
      </DashboardSection>
    </>
  );
}
