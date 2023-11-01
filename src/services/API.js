

async function getUser(idUser) {
  const response = await fetch(`http://localhost:3000/user/${idUser}`);
  const dataUser = await response.json();
  const rawUser = dataUser.data;
  const formatedUser = [];
  
  if(rawUser.todayScore){
    formatedUser.push({
      id: rawUser.id,
      userInfos: rawUser.userInfos,
      score: rawUser.todayScore,
      keyData: rawUser.keyData
    });
  } else {
    formatedUser.push({
      id: rawUser.id,
      userInfos: rawUser.userInfos,
      score: rawUser.score,
      keyData: rawUser.keyData
    });
  }
  return (formatedUser[0]);
}

async function getActivity(idUser) {
  const response = await fetch(`http://localhost:3000/user/${idUser}/activity`);
  const dataActivity = await response.json();
  return (dataActivity.data.sessions);
}

async function getAverageSession(idUser) {
  const response = await fetch(`http://localhost:3000/user/${idUser}/average-sessions`);
  const dataAverageSession = await response.json();
  return (dataAverageSession.data.sessions);
}

async function getPerformance(idUser) {
  const response = await fetch(`http://localhost:3000/user/${idUser}/performance`);
  const dataPerformance = await response.json();
  return (dataPerformance.data.data);
}

export {getUser, getActivity, getAverageSession, getPerformance};