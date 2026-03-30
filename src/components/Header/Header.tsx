import './Header.css';
import { User } from 'phosphor-react';

export default function Header() {
  return (
    <header>
      <nav className="box">
        <div className="logo-container">
          <span className="logo">Pawmetrics</span>
        </div>
        
        <div className="user-section">
          <div className='avatar-container'>
            <User size={32} weight="regular" />
          </div>
        </div>
      </nav>
    </header>
  );
}