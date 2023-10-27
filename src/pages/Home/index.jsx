import { Link } from 'react-router-dom';
import LateralNavbar from '../../components/LateralNavbar';
import TopNavbar from '../../components/TopNavbar';
import './style.css';

function Home () {
  return (
    <div className="home">
      <TopNavbar />
      <LateralNavbar />
      <div className="home-links">
        <Link to="/user/12" className="home-users">User 12</Link>
        <Link to="/user/18" className="home-users">User 18</Link>
      </div>
    </div>
  );
}

export default Home;