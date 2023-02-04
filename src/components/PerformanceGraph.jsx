import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import styles from '../styles/PerformanceGraph.module.css'
import PropTypes from 'prop-types';

/**
 * PerformanceGraph component that displays a radar chart of the performance data.
 * @function
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.data - An array of objects representing the performance data. Each object must have the following keys:
 *    - subject (string) - The name of the performance subject.
 *    - value (number) - The value of the performance subject.
 *    - maxValue (number) - The maximum value of the performance subject.
 * @returns {JSX} - The component that displays a radar chart of the performance data.
 */


function PerformanceGraph(props){

    const performanceData = props.data

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

PerformanceGraph.propTypes = {
  data: PropTypes.array
}


export default PerformanceGraph

