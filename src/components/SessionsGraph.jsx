import { LineChart, Line, XAxis, YAxis,Tooltip, ResponsiveContainer} from 'recharts';
import styles from '../styles/SessionsGraph.module.css'

function SessionsGraph(props){

    const sessionsData = props.data
    console.log(sessionsData)
    
    return(
      <div className={styles.container}>
        <h2 className={styles.title}>Durée moyenne des sessions</h2>
        <ResponsiveContainer width='100%' height={150}>
            <LineChart width={500} height={300} data={sessionsData}>
              <XAxis tick={{fill:'white', fillOpacity:0.5}} padding={{ left: 20, right: 20 }} axisLine={false} tickLine={false} dataKey="day" textDecoration={{color:'white'}}/>
              <YAxis hide={true} padding={{ bottom:30}}/>
              <Tooltip 
              content={({ payload}) => {
                if (payload && payload.length) {
                const {minutes} = payload[0].payload;
                return (
                <div className={styles.tooltip}>
                  <p>{minutes} min</p>
                </div>
                );
                }
                return null;
                }}
              />
              <Line type="natural" dataKey="minutes" stroke="#FFFFFF" dot={false}/>
            </LineChart>
          </ResponsiveContainer>
      </div>
      
    ) 
}

export default SessionsGraph