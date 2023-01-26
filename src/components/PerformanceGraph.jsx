import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import styles from '../styles/PerformanceGraph.module.css'

function PerformanceGraph(props){

    const performanceData = props.data
    console.log(performanceData)


      return(
        <div className={styles.container}>
           <ResponsiveContainer width='100%' height={250}>
            <RadarChart cx='50%' cy='50%' outerRadius={80} width={300} height={300} data={performanceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" fontSize={12} fontWeight={500} axisLine={false} />
              <Radar name="Subjects" dataKey="value" fill="#FF0101B2" />
            </RadarChart>
          </ResponsiveContainer>
        </div>
       
        
      )
    
}

export default PerformanceGraph

