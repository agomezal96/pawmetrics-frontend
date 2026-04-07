import type { ReactNode } from 'react';
import styles from './DashboardSection.module.css';

interface DashboardSectionProps {
  sectionTitle?: string;
  children: ReactNode;
  isList?: boolean;
  showSeeAll?: boolean;
}

export default function DashboardSection({
  sectionTitle,
  children,
  isList,
  showSeeAll,
}: DashboardSectionProps) {
  return (
    <section>
      <header className={styles['section-header']}>
        <h2 className={styles['section-title']}>{sectionTitle}</h2>
        {showSeeAll && (
          <button type="button" className={styles['view-all']}>
            View all &rarr;
          </button>
        )}
      </header>
      <div
        className={`${styles['cards-container']} ${isList ? styles['is-list'] : ''}`}
      >
        {children}
      </div>{' '}
    </section>
  );
}
