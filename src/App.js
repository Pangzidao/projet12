import ActivityGraph from './components/ActivityGraph';
import { getUserData, getUserDataMock, getUserScore, getUserScoreMock, getUserActivity, 
         getUserActivityMock, getUserPerformance, getUserPerformanceMock, getUserSession, 
         getUserSessionMock } from './userData';
import { useState, useEffect } from 'react';
import SessionsGraph from './components/SessionsGraph';
import PerformanceGraph from './components/PerformanceGraph';
import ScoreGraph from './components/ScoreGraph';
import Info from './components/Info';
import caloriesLogo from './assets/calories.png'
import glucidesLogo from './assets/glucides.png'
import lipidesLogo from './assets/lipides.png'
import proteinsLogo from './assets/proteins.png'
import styles from './styles/App.module.css'
import logoSportSee from './assets/logoSportSee.png'
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'

let id = 12
let APIconnection = true

function App() {
  const [firstName, setFirstName] = useState('');
  const [activityData, setActivityData] = useState('');
  const [keyData, setKeyData] = useState('');
  const [performanceData, setPerformanceData] = useState('');
  const [scoreData, setScoreData] = useState('');
  const [sessionsData, setSessionsData] = useState('');

  useEffect(() => {
    if (APIconnection === true){
      getUserData(id).then((userData) => {
        setFirstName(userData.userInfos.firstName);
        setKeyData(userData.keyData)
      });
      getUserActivity(id).then((activityData) => {
        setActivityData(activityData)
      });
      getUserPerformance(id).then((performanceData) => {
        setPerformanceData(performanceData);
      });
           
      getUserSession(id).then((sessionData) => {
        setSessionsData(sessionData);
      });

      getUserScore(id).then((scoreData) =>{
        setScoreData(scoreData)
      })

      console.log("connected")

    }else{
      const userData = getUserDataMock(id)
      setFirstName(userData.userInfos.firstName);
      setKeyData(userData.keyData);

      const activityData = getUserActivityMock(id)
      setActivityData(activityData);

      const performanceData = getUserPerformanceMock(id)
      setPerformanceData(performanceData)
  
      const sessionData = getUserSessionMock(id)
      setSessionsData(sessionData);

      const scoreData = getUserScoreMock(id)
      setScoreData(scoreData)

      console.log("disconnected")
    
    }
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logoSportSee} alt="logo de SportSee" height='60px'/>
          <h1 className={styles.heading}>SportSee</h1>
        </div>
        <ul className={styles.menu}>
          <li className={styles.navigation}>Accueil</li>
          <li className={styles.navigation}>Profil</li>
          <li className={styles.navigation}>Réglage</li>
          <li className={styles.navigation}>Communauté</li>
        </ul>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <div className={styles.pics}>
            <img src={pic1} alt='pic1' width='64px'/>
            <img src={pic2} alt='pic2'width='64px'/>
            <img src={pic3} alt='pic3'width='64px'/>
            <img src={pic4} alt='pic4'width='64px'/>
          </div>
          <p className={styles.copyright}>Copyright,SportSee 2020</p>
        </div>
        <div className={styles.mainPage}>
          <h2 className={styles.mainPageHeading}>Bonjour <span className={styles.firstName}>{firstName}</span></h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className={styles.userInfosContainer}>
            <div className={styles.graphs}>
              <div className={styles.activityGraphContainer}>
                <ActivityGraph id={id} APIconnection={APIconnection} data={activityData}/>
              </div>
              <div className={styles.sessionsGraphContainer}>
                <SessionsGraph id={id} APIconnection={APIconnection} data={sessionsData}/>
              </div>
              <div className={styles.performanceGraphContainer}>
                <PerformanceGraph id={id} APIconnection={APIconnection} data={performanceData}/>
              </div>
              <div className={styles.scoreGraphContainer}>
                <ScoreGraph id={id} APIconnection={APIconnection} data={scoreData}/>
              </div>
            </div>
            <div className={styles.infosCard}>
              <Info logo={caloriesLogo} name="Calories" logoBackground="#fbeaea" id={id} type="calorieCount" unit="kCal" APIconnection={APIconnection} data={keyData} />
              <Info logo={proteinsLogo} name="Proteines" logoBackground="#e9f4fb" id={id} type="proteinCount"unit="g" APIconnection={APIconnection} data={keyData}/>
              <Info logo={glucidesLogo} name="Glucides" logoBackground="#fbf6e5" id={id} type="carbohydrateCount" unit="g" APIconnection={APIconnection} data={keyData}/>
              <Info logo={lipidesLogo} name="Lipides" logoBackground="#fbeaef" id={id} type="lipidCount" unit="g" APIconnection={APIconnection} data={keyData}/>
            </div>    
          </div>
        </div>     
      </main>
    </div>
  )
}

export default App;
