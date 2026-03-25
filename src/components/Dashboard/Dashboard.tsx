import type { ReactNode } from 'react';
import './Dashboard.css';

interface DashboardProps {
  children: ReactNode
}

export default function Dashboard({children}:DashboardProps) {
    
  return (
    <div className="bento-grid">
      {children}
    </div>
  );
}
