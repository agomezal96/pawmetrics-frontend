import './Header.css';
import { PawPrint, User } from 'phosphor-react';

export default function Header() {
  return (
    <header>
      <nav className="box">
        <div className="logo-container">
          <span className="logo"><PawPrint color="var(--brand)" weight='fill' size={46}/></span>
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