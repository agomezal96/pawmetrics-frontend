import './Header.css';
import { List } from 'phosphor-react';

export default function Header() {
  return (
    <header>
      <span className="logo">Pawmetrics</span>
      <List size={32} />
    </header>
  );
}
