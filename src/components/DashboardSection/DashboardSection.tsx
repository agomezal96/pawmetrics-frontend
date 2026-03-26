import type { ReactNode } from 'react';
import styles from './DashboardSection.module.css'

interface DashboardSectionProps {
  sectionTitle?: string;
  children: ReactNode;
}

export default function DashboardSection({
  sectionTitle,
  children,
}: DashboardSectionProps) {
  return (
    <section>
      <h2 className={styles['section-title']}>{sectionTitle}</h2>
      <div className={styles['cards-container']}>{children}</div>
    </section>
  );
}
