import AverageSessionDuration from '../AverageSessionDuration';
import DailyActivity from '../DailyActivity';
import Intensity from '../Intensity';
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
        <div>
          <p>truc</p>
          <p>truc</p>
          <p>truc</p>
          <p>truc</p>
        </div>
      </div>
    </main>
  )
}

export default MainContainer;