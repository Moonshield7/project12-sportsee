import './style.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

function DailyActivity ({data}) {

  // console.log(data)

  function formatingData() {
    const rawDatas = [];
    data.forEach((elem, i) => {
      let index = i+1;
      rawDatas.push({
        day: index,
        kilogram: elem.kilogram,
        calories: elem.calories
      })
    });
    return rawDatas;
  }

  const formatedData = formatingData();

  console.log("après", formatedData)

  return (
    <div className="daily-activity-container">
      <div className='daily-activity-text'>
        <h3 className='daily-activity-legend'>Activité quotidienne</h3>
        <div className='legend-container'>
          <p> <span className='dot1'> </span>Poids (kg)</p>
          <p> <span className='dot2'> </span>Calories brûlées (kCal)</p>
        </div>
      </div>
      <BarChart width={830} height={250} data={formatedData} barGap={10} margin={{ top: 5, right: -25, bottom: 5, left: 5 }}>
        <XAxis scale='point' dataKey="day" stroke="#9B9EAC" padding={{left:10, right: 12}}/>
        <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" type="number" domain={['dataMin -1', 'dataMax +1']}  />
        <YAxis yAxisId="left" orientation="left" hide={true} />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        {/* <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} /> */}
        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" vertical={false} />
        <Bar yAxisId="right" dataKey="kilogram" fill="#000000" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar yAxisId="left" dataKey="calories" fill="#FF0101" barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </div>
  )
  
}

export default DailyActivity;