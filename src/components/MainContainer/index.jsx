import AverageSessionDuration from '../AverageSessionDuration';
import DailyActivity from '../DailyActivity';
import Intensity from '../Intensity';
import MacroCard from '../MacroCard';
import Score from '../Score';
import TitleArea from '../TitleArea';
import './style.css'

function MainContainer ({dataUser, dataActivity, dataAverageSession, dataPerformance}) {
  // console.log(dataUser.keyData)
  const userInfos = dataUser.userInfos;
  const keyData = dataUser.keyData;
  
  return (
    <main className="main-container">
      <TitleArea userName={userInfos.firstName} />
      <div className='tracking-container'>
        <div className='graphics-container'>
          <DailyActivity />
          <div className='small-graphics-container'>
            <AverageSessionDuration />
            <Intensity />
            <Score />
          </div>
        </div>
        <ul className='macro-container'>
          <MacroCard type="Calories" value={keyData.calorieCount} />
          <MacroCard type="Protéines" value={keyData.carbohydrateCount} />
          <MacroCard type="Glucides" value={keyData.lipidCount} />
          <MacroCard type="Lipides" value={keyData.proteinCount} />
        </ul>
      </div>
    </main>
  )
}

export default MainContainer;