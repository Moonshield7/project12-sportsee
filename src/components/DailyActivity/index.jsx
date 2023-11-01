import './style.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

function DailyActivity ({data}) {
  // Formate les données pour que la légende de l'axe X corresponde à la maquette
  function formatingData() {
    const rawDatas = [];
    data.forEach((elem, i) => {
      let index = i+1;
      rawDatas.push({
        day: index,
        kilogram: elem.kilogram,
        calories: elem.calories
      });
    });
    return rawDatas;
  }
  const formatedData = formatingData();

  // Retourne un tooltip personnalisé pour le graphique
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='daily-activity-tooltip'>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
  };

  return (
    <div className="daily-activity-container">
      <div className='daily-activity-text'>
        <h3 className='daily-activity-legend'>Activité quotidienne</h3>
        <div className='legend-container'>
          <p> <span className='dot1'> </span>Poids (kg)</p>
          <p> <span className='dot2'> </span>Calories brûlées (kCal)</p>
        </div>
      </div>
      <BarChart width={830} height={250} data={formatedData} barGap={10} margin={{ top: 5, right: 0, bottom: 5, left: 0 }} >
        <XAxis dataKey="day" stroke="#9B9EAC" padding={{left:10, right: 12}}/>
        <YAxis yAxisId="right" orientation="right" stroke="#9B9EAC" type="number" domain={['dataMin -1', 'dataMax +1']} allowDecimals={false}  />
        <YAxis yAxisId="left" orientation="left" hide={true} />
        <Tooltip content={CustomTooltip} viewBox={{ x: 0, y: 0, width: 400, height: 400, stroke:'#222222af' }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" vertical={false} />
        <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar yAxisId="left" dataKey="calories" fill="#FF0101" barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </div>
  ); 
}

DailyActivity.propTypes = {
  data: PropTypes.array
};

export default DailyActivity;