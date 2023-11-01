const API_DOES_EXIST = true;

async function getUser(idUser) {
  let rawUser;
  if(API_DOES_EXIST){
    const response = await fetch(`http://localhost:3000/user/${idUser}`);
    const dataUser = await response.json();
    rawUser = dataUser.data;
  } else {
    const response = await fetch('/mock-data/data-users.json');
    const dataUsers = await response.json();
    rawUser = dataUsers.find(user => user.id == idUser);
    console.log('User from mock');
  }
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
  if(API_DOES_EXIST){
    const response = await fetch(`http://localhost:3000/user/${idUser}/activity`);
    const dataActivity = await response.json();
    return (dataActivity.data.sessions);
  } else {
    const response = await fetch('/mock-data/data-activity.json');
    const dataActivities = await response.json();
    const activityUser = dataActivities.find(activity => activity.userId == idUser);
    console.log('Sessions from mock');
    return activityUser.sessions;
  }

}

async function getAverageSession(idUser) {
  if(API_DOES_EXIST){
    const response = await fetch(`http://localhost:3000/user/${idUser}/average-sessions`);
    const dataAverageSession = await response.json();
    return (dataAverageSession.data.sessions);
  } else {
    const response = await fetch('/mock-data/data-session.json');
    const dataAverageSessions = await response.json();
    const AverageSessionsUser = dataAverageSessions.find(sessions => sessions.userId == idUser);
    console.log('Average sessions from mock');
    return AverageSessionsUser.sessions;
  }

}

async function getPerformance(idUser) {
  if(API_DOES_EXIST){
    const response = await fetch(`http://localhost:3000/user/${idUser}/performance`);
    const dataPerformance = await response.json();
    return (dataPerformance.data.data);
  } else {
    const response = await fetch('/mock-data/data-performance.json');
    const dataPerformance = await response.json();
    const PerformanceUser = dataPerformance.find(performance => performance.userId == idUser);
    console.log('Average sessions from mock');
    return PerformanceUser.data;
  }

}

export {getUser, getActivity, getAverageSession, getPerformance};