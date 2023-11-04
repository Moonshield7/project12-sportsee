import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import TopNavbar from '../../components/TopNavbar';
import LateralNavbar from '../../components/LateralNavbar';
import { getActivity, getAverageSession, getPerformance, getUser } from '../../services/API';
import ErrorDisplay from '../../components/ErrorDisplay';
import Loader from '../../components/Loader';

function CallApi ({valueId}) {
  const [user, setUser] = useState(undefined);
  const [activity, setActivity] = useState(undefined);
  const [averageSession, setAverageSession] = useState(undefined);
  const [performance, setPerformance] = useState(undefined);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    async function setDatas (){
      try {
        setIsLoading(true);
        setUser(await getUser(valueId));
        setActivity(await getActivity(valueId));
        setAverageSession(await getAverageSession(valueId));
        setPerformance(await getPerformance(valueId));
      } catch {
        console.error('Une erreur est survenue lors de la récupération des données.');
        setUser(null);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    setDatas();

  }, [valueId]);

  if(isLoading){
    return <div>
      <TopNavbar />
      <LateralNavbar />
      <Loader />
    </div>;
  }
  if(user !== undefined && activity !== undefined && averageSession !== undefined && performance !== undefined) {
    return (
      <div>
        <TopNavbar />
        <LateralNavbar />
        <MainContainer dataUser={user} dataActivity={activity} dataAverageSession={averageSession}  dataPerformance={performance} />
        </div>
    );
  }
  
  if(user === null || activity === null || averageSession === null || performance === null) {
    return (
      <div>
        <TopNavbar />
        <LateralNavbar />
        <ErrorDisplay />
      </div>
      );
  }
}

CallApi.propTypes = {
  valueId: PropTypes.string
};

export default CallApi;