import type { ReactNode } from 'react';
import styles from './DashboardSection.module.css';

interface DashboardSectionProps {
  sectionTitle?: string;
  children: ReactNode;
  isList?: boolean;
}

export default function DashboardSection({
  sectionTitle,
  children,
  isList,
}: DashboardSectionProps) {
  return (
    <section>
      <h2 className={styles['section-title']}>{sectionTitle}</h2>
      <div
        className={`${styles['cards-container']} ${isList ? styles['is-list'] : ''}`}
      >
        {children}
      </div>{' '}
    </section>
  );
}
