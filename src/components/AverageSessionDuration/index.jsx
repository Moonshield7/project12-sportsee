import './style.css'
import { LineChart, Line, XAxis } from 'recharts'

function AverageSessionDuration ({data}) {
  // console.log(data)

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  function formatingData() {
    const rawDatas = [];
    data.forEach((session, i) => {
      const sessionDuration = session.sessionLength;
      rawDatas.push({
        dayInitial: days[i],
        duration: sessionDuration
      })
    });
    return rawDatas;
  }

  const formatedData = formatingData();
  // console.log(formatedData)

  return (
    <div className='session-box'>
      <LineChart width={260} height={260} data={formatedData}>
        <Line type="monotone" dataKey="duration" stroke='#FFFFFF' />
        <XAxis dataKey="dayInitial" />
      </LineChart>
    </div>
  )
}

export default AverageSessionDuration