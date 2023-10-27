import sit from '../../assets/icon-sit.png';
import swim from '../../assets/icon-swim.png';
import bike from '../../assets/icon-bike.png';
import weight from '../../assets/icon-weight.png';

function NavbarIcon ({content}) {
  switch(content){
    case 'sit' :
      return <img src={sit} alt="" />;
    case 'swim' :
      return <img src={swim} alt="" />;
    case 'bike' :
      return <img src={bike} alt="" />;
    case 'weight' :
      return <img src={weight} alt="" />;
    default :
      return <img src="" alt="" />;
  }
}


export default NavbarIcon;