import './style.css';
import { LineChart, Line, XAxis, Tooltip, YAxis  } from 'recharts';
import PropTypes from 'prop-types';

function AverageSessionDuration ({data}) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  function formatingData() {
    const rawDatas = [];
    data.forEach((session, i) => {
      const sessionDuration = session.sessionLength;
      rawDatas.push({
        dayInitial: days[i],
        duration: sessionDuration
      });
    });
    return rawDatas;
  }

  function CustomTooltip() {
    return null;
  }

  const formatedData = formatingData();

  return (
    <div className='session-box'>
      <h3 className='legend'>Durée moyenne des sessions</h3>
      <LineChart width={260} height={260} data={formatedData}>
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="30%" stopColor="#ffffff9c" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#ffffff9c" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Tooltip content={CustomTooltip} cursor={{ stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 40}} />
        <Line type="natural" dataKey="duration" stroke='url(#colorUv)' dot={false} strokeWidth={2} />
        <XAxis dataKey="dayInitial" padding={{ left: 10, right: 10 }} axisLine={false} tickLine={false} stroke='#ffffff9c' />
        <YAxis domain={['dataMin -15', 'dataMax +20']} hide={true} />
      </LineChart>
    </div>
  );
}

AverageSessionDuration.propTypes = {
  data: PropTypes.array,
};

export default AverageSessionDuration;