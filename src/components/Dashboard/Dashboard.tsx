import type { ReactNode } from 'react';
import styles from './Dashboard.module.css';

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return <div className={styles['bento-grid']}>{children}</div>;
}
