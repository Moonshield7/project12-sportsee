import './style.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import PropTypes from 'prop-types';


function Intensity ({data}) {
  const activityType = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];

  // console.log(data)

  function formatingData() {
    const rawDatas = [];
    data.forEach((activity, i) => {
      rawDatas.push({
        kind: activityType[i],
        value: activity.value
      });
    });
    return rawDatas;
  }

  const formatedData = formatingData();

  // console.log("après", formatedData)

  return (
    <div className='intensity-box'>
      <RadarChart width={260} height={260} cx="50%" outerRadius="70%" data={formatedData} startAngle={30} endAngle={-330}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: '11px', fontWeigth: 500, fill: '#FFF' }} />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}

Intensity.propTypes = {
  data: PropTypes.array
};
export default Intensity;