import type { EarningsStats } from '../../../types/dashboard';
import EarningsCard from '../../cards/EarningsCard';
import DashboardSection from '../../DashboardSection';

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
