import './Header.css';
import avatar from '../../assets/images/cartoon-dog.png'

export default function Header() {
  return (
    <header>
      <nav className="box">
        <div className="logo-container">
          <span className="logo">Pawmetrics</span>
        </div>
        
        <div className="user-section">
          <div className='avatar-container'>
            <img src={avatar} alt="User profile" />
          </div>
        </div>
      </nav>
    </header>
  );
}