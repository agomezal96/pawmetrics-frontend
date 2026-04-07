import './Header.css';
import { PawPrint } from 'phosphor-react';
import avatar from '../../assets/images/avatar.png';

export default function Header() {
  return (
    <header>
      <nav className="box">
        <div className="logo-container">
          <span className="logo">
            <PawPrint color="var(--brand)" weight="fill" size={46} />
          </span>
        </div>

        <div className="user-section">
          <div className="avatar-container">
            <img src={avatar} alt="Avatar image" />
          </div>
        </div>
      </nav>
    </header>
  );
}
