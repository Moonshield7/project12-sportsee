import PropTypes from 'prop-types';
import calories from '../../assets/calories-icon.png';
import carbs from '../../assets/carbs-icon.png';
import fat from '../../assets/fat-icon.png';
import protein from '../../assets/protein-icon.png';
import './style.css';

function MacroCard ({type, value}) {
  let pic;
  switch(type){
    case 'Calories' :
      pic = calories;
      break;
    case 'Protéines' :
      pic = protein;
      break;
    case 'Glucides' :
      pic = carbs;
      break;
    case 'Lipides' :
      pic = fat;
      break;
    default :
      console.log('Wrong type for macro card');
      break;
  }
  return (<li className='macro-card'>
    <img src={pic} alt="" />
    <div className='macro-card-text'>
      <h3>{type === 'Calories' ? `${value}kCal` : `${value}g`}</h3>
      <p>{type}</p>
    </div>
  </li>);
}

MacroCard.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number
};

export default MacroCard;