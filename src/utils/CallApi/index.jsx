import { useEffect } from "react";
import { useState } from "react";
import MainContainer from "../../components/MainContainer";
import TopNavbar from "../../components/TopNavbar";
import LateralNavbar from "../../components/LateralNavbar";

function CallApi ({valueId}) {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [averageSession, setAverageSession] = useState();
  const [performance, setPerformance] = useState();

  useEffect(() => {
    async function getUser(idUser) {
      const response = await fetch(`http://localhost:3000/user/${idUser}`)
      const dataUser = await response.json();
      setUser(dataUser.data)
    }

    async function getActivity(idUser) {
      const response = await fetch(`http://localhost:3000/user/${idUser}/activity`);
      const dataActivity = await response.json();
      setActivity(dataActivity.data.sessions);
    }

    async function getAverageSession(idUser) {
      const response = await fetch(`http://localhost:3000/user/${idUser}/average-sessions`);
      const dataAverageSession = await response.json();
      setAverageSession(dataAverageSession.data.sessions);
    }

    async function getPerformance(idUser) {
      const response = await fetch(`http://localhost:3000/user/${idUser}/performance`);
      const dataPerformance = await response.json();
      setPerformance(dataPerformance.data.data);
    }

    getUser(valueId);
    getActivity(valueId);
    getAverageSession(valueId);
    getPerformance(valueId);
  }, [valueId]);

  // console.log('user :', user)
  // console.log('activity', activity)
  // console.log('session', averageSession)
  // console.log('performance', performance)
  // console.log({valueId})

  if(user !== undefined && activity !== undefined && averageSession !== undefined && performance !== undefined) {
    return (
      <div>
        <TopNavbar />
        <LateralNavbar />
        <MainContainer dataUser={user} dataActivity={activity} dataAverageSession={averageSession}  dataPerformance={performance} />
        </div>
    );
  }
}

export default CallApi;