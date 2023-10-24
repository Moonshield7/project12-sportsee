import { useEffect } from "react";
import { useState } from "react";
import MainContainer from "../../components/MainContainer";
import TopNavbar from "../../components/TopNavbar";
import LateralNavbar from "../../components/LateralNavbar";

function CallApi ({userID}) {
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

    getUser(18);
    getActivity(18);
    getAverageSession(18);
    getPerformance(18);
  }, []);

  // console.log('user :', user)
  // console.log('activity', activity)
  // console.log('session', averageSession)
  // console.log('performance', performance)
  // console.log({userID})

  if(user !== undefined) {
    return (
      <div>
      <TopNavbar />
      <LateralNavbar />
      <MainContainer dataUser={user} dataActivity={activity} dataAverageSession={averageSession} dataPerformance={performance} />
      </div>
    );
  }
}

export default CallApi;