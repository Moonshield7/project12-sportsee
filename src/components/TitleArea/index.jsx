import PropTypes from 'prop-types';
import './style.css';

function TitleArea ({userName}) {
  return (
    <div className="title-area">
      <h1>Bonjour <span className='name-user'>{userName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

TitleArea.propTypes = {
  userName: PropTypes.string
};

export default TitleArea;