import type { ReactNode } from 'react';
import styles from './EmptyMessage.module.css'

interface EmptyMessageProps {
  children: ReactNode;
}

export default function EmptyMessage({ children }: EmptyMessageProps) {
  return (
    <div className={styles['empty-container']}>
      <p className={styles['empty-text']}>{children}</p>
    </div>
  );
}
