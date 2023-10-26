import './style.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

function Score ({scoreValue}) {
  const data = [
    {value:scoreValue},
  ]

  const percent = (Math.round(scoreValue*100));

  function customLabel () {
    return <p>
      <span> {percent}% </span>
      <span>de votre</span>
      <span>objectif</span>
    </p>
  }
  return (
    <div className="score-box">
      <h3 className='score-legend'>Score</h3>
      <p className='score-detail'>
        <span className='score-percent'> {percent}% </span>
        <span>de votre</span>
        <span>objectif</span>
      </p>
      <PieChart width={260} height={260}>
        <Pie data={[{value: 100}]} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#FFFFFF" >
        </Pie>
        <Pie label={false} data={data} dataKey="value" cx="50%" cy="50%" innerRadius={90} outerRadius={100} cornerRadius={10}fill="#FF0101" startAngle={90} endAngle={(scoreValue*360) + 90} />
      </PieChart>     
    </div>
  )
}

export default Score;