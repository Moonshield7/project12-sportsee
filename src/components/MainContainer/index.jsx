import AverageSessionDuration from '../AverageSessionDuration';
import DailyActivity from '../DailyActivity';
import Intensity from '../Intensity';
import MacroCard from '../MacroCard';
import Score from '../Score';
import TitleArea from '../TitleArea';
import './style.css'

function MainContainer () {
  return (
    <main className="main-container">
      <TitleArea />
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
          <MacroCard type="Calories" />
          <MacroCard type="Protéines" />
          <MacroCard type="Glucides" />
          <MacroCard type="Lipides" />
        </ul>
      </div>
    </main>
  )
}

export default MainContainer;