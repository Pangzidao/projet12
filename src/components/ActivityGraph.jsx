import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer} from 'recharts';
import styles from '../styles/ActivityGraph.module.css'

function ActivityGraph(props){

 

    const activityData = props.data

    return(
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>Activité quotidienne</h2>
            <ul className={styles.legend}>
              <li className={styles.weight}>Poids(kg)</li>
              <li className={styles.calories}>Calories brulées(kCal)</li>
            </ul>
          </header>
            <ResponsiveContainer width='100%' height={220}>
              <BarChart width={730} height={250} data={activityData}>
                <CartesianGrid y="kilogram" vertical={false} strokeDasharray="4"/>
                <XAxis dataKey="day" />
                <YAxis yAxisId="kilogram" axisLine={false} tickCount={4} tickFormatter={(tick) => parseInt(tick)} scale='sequential' dataKey="kilogram" orientation='right' interval="preserveStartEnd" tickLine={false} type="number" domain={([kilogramMin, kilogramMax])=> {return [kilogramMin - 1, kilogramMax + 1]}} />
                <YAxis dataKey="calories" yAxisId="calories" hide={true}/>
                <Tooltip
                content={({ payload}) => {
                  if (payload && payload.length) {
                  const {kilogram, calories } = payload[0].payload;
                  return (
                  <div className={styles.tooltip}>
                    <p>{kilogram}kg</p>
                    <p>{calories}Kcal</p>
                  </div>
                  );
                  }
                  return null;
                  }}
                  />                
                  <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
              </BarChart> 
            </ResponsiveContainer>
                   
        </div>
       
    ) 
}


export default ActivityGraph