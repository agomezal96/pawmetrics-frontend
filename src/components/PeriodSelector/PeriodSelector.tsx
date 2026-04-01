import styles from './PeriodSelector.module.css'
import type { DashboardPeriod } from '../../types/dashboard';

interface PeriodSelectorProps {
  currentPeriod: DashboardPeriod;
  onPeriodChange: (period: DashboardPeriod) => void;
}

export default function PeriodSelector({
  currentPeriod,
  onPeriodChange,
}: PeriodSelectorProps) {
  const periods: { value: DashboardPeriod; label: string }[] = [
    { value: 'all_time', label: 'All Time' },
    { value: 'this_year', label: 'This Year' },
    { value: 'last_month', label: 'Last Month' },
    { value: '3_months', label: 'Last 3 Months' },
    { value: '6_months', label: 'Last 6 Months' },
    { value: '12_months', label: 'Last 12 Months' },
    { value: 'last_year', label: 'Last Year' },
  ];
  return (
    <div className={styles['selector-wrapper']}>
      <label htmlFor="period-select" className={styles['label']}>
        View stats for:
      </label>
      <select
        id="period-select"
        value={currentPeriod}
        onChange={(e) => onPeriodChange(e.target.value as DashboardPeriod)}
        className={styles['select-input']}
      >
        {periods.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
    </div>
  );
}
