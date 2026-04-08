import { PawPrint } from 'phosphor-react';
import avatar from '../../../assets/images/avatar.png';
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles['main-header']}>
      <nav className={styles.box}>
        <div className={styles['logo-container']}>
          <span className={styles.logo}>
            <PawPrint color="var(--brand)" weight="fill" size={46} />
          </span>
        </div>

        <div className={styles['user-section']}>
          <div className={styles['avatar-container']}>
            <img src={avatar} alt="Avatar image" />
          </div>
        </div>
      </nav>
    </header>
  );
}
