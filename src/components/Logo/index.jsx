import { Link } from 'react-router-dom';
import logo from '../../assets/SportSee-logo.png';
import './style.css';

function Logo() {
  return (
    <Link to="/" >
      <img src={logo} alt="" className="logo" />
    </Link>
  )

}

export default Logo;