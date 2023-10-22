import NavbarIcon from '../NavbarIcon';
import './style.css';

function LateralNavbar() {
  return (
    <nav className="lateral-navbar">
      <div className="lateral-logo-container">
        <NavbarIcon content="sit"/>
        <NavbarIcon content="swim"/>
        <NavbarIcon content="bike"/>
        <NavbarIcon content="weight"/>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </nav>
  );
}

export default LateralNavbar;