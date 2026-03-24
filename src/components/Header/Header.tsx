import './Header.css';
import avatar from '../../assets/images/cartoon-dog.png'

export default function Header() {
  return (
    <header>
      <div className="box">
        <span className="logo">Pawmetrics</span>
        <div className='avatar-container'>
          <img src={avatar} alt="Avatar photo" />
        </div>
      </div>
    </header>
  );
}
