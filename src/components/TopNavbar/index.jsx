import Logo from '../Logo';
import './style.css';

function TopNavbar() {
  return (
    <nav className="top-navbar">
      <Logo />
      <p>Accueil</p>
      <p>Profil</p>
      <p>Réglages</p>
      <p>Communautés</p>
    </nav>
  );
}

export default TopNavbar;
