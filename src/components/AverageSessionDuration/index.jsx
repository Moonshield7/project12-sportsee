import './style.css';
import { LineChart, Line, XAxis, Tooltip, YAxis, Rectangle  } from 'recharts';
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

  const formatedData = formatingData();

  return (
    <div className='session-box'>
      <h3 className='legend'>Durée moyenne des sessions</h3>
      <LineChart width={260} height={260} data={formatedData}>
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#ffffff9c" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#ffffff9c" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor />}
          />
        <Line type="natural" dataKey="duration" stroke='url(#colorUv)' dot={false} activeDot={false} strokeWidth={2} />
        <XAxis dataKey="dayInitial" padding={{ left: 10, right: 10 }} axisLine={false} tickLine={false} stroke='#ffffff9c' />
        <YAxis domain={['dataMin -15', 'dataMax +20']} hide={true} />
      </LineChart>
    </div>
  );
}

const CustomCursor = ({points}) => {
    const X = points[0].x;
    const Y = points[0].y;
  
    return (
      <Rectangle
        width={1000}
        height={1000}
        x={X - 20}
        y={Y - 100}
        style={{background: 'red', opacity: 0.1}}
      />
    );
  };

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <p className='tooltip-container'>{`${payload[0].value} min`}</p>;
  }

  return null;
}

AverageSessionDuration.propTypes = {
  data: PropTypes.array,
};

CustomCursor.propTypes = {
  points: PropTypes.array,
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default AverageSessionDuration;