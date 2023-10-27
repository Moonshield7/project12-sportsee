import PropTypes from 'prop-types';
import AverageSessionDuration from '../AverageSessionDuration';
import DailyActivity from '../DailyActivity';
import Intensity from '../Intensity';
import MacroCard from '../MacroCard';
import Score from '../Score';
import TitleArea from '../TitleArea';
import './style.css';

function MainContainer ({dataUser, dataActivity, dataAverageSession, dataPerformance}) {
  // console.log(dataAverageSession)
  const userInfos = dataUser.userInfos;
  const keyData = dataUser.keyData;
  
  return (
    <main className='main-container'>
      <TitleArea userName={userInfos.firstName} />
      <div className='tracking-container'>
        <div className='graphics-container'>
          <DailyActivity data={dataActivity} />
          <div className='small-graphics-container'>
            <AverageSessionDuration data={dataAverageSession} />
            <Intensity data={dataPerformance} />
            <Score scoreValue={dataUser.score || dataUser.todayScore}/>
          </div>
        </div>
        <ul className='macro-container'>
          <MacroCard type='Calories' value={keyData.calorieCount} />
          <MacroCard type='Protéines' value={keyData.carbohydrateCount} />
          <MacroCard type='Glucides' value={keyData.lipidCount} />
          <MacroCard type='Lipides' value={keyData.proteinCount} />
        </ul>
      </div>
    </main>
  );
}

MainContainer.propTypes = {
  dataUser: PropTypes.object,
  dataActivity: PropTypes.array,
  dataAverageSession: PropTypes.array,
  dataPerformance: PropTypes.array,
};

export default MainContainer;