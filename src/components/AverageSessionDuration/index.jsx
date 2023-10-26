import './style.css'
import { LineChart, Line, XAxis, Tooltip, YAxis, Label  } from 'recharts'

function AverageSessionDuration ({data}) {
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
      <h3 className='legend'>Durée moyenne des sessions</h3>
      <LineChart width={260} height={260} data={formatedData}>
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Line type="natural" dataKey="duration" stroke='#ffffff9c' dot={false} strokeWidth={2} />
        <XAxis dataKey="dayInitial" padding={{ left: 10, right: 10 }} axisLine={false} tickLine={false} stroke='#ffffff9c' />
        <YAxis domain={['dataMin -15', 'dataMax +20']} hide={true} />
      </LineChart>
    </div>
  )
}

export default AverageSessionDuration