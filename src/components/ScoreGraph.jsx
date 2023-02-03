import { PieChart, Pie, ResponsiveContainer, Cell} from 'recharts';
import styles from '../styles/ScoreGraph.module.css'
import PropTypes from 'prop-types';

/**
 * Renders a pie chart to visualize the score data.
 * @param {object} props - The props passed to the component.
 * @param {Array} props.data - An array of objects representing the score data. Each object should have a "name" property (either "score" or "maxScoreDifference") and a "value" property (a number).
 * @returns {JSX.Element} A react component that displays a pie chart of the score data.
 */


function ScoreGraph(props){

    const scoreData= props.data
    const colors = ["#E60000", "#FBFBFB"]

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Score</h2>
            <ResponsiveContainer width='100%' height={250}>
                <PieChart width={730} height={250}>
                    <Pie className={styles.sector} data={scoreData} 
                    dataKey="value" nameKey="name" cx="50%" cy="50%" 
                    outerRadius={80} fill='#FF0000' innerRadius={65} startAngle={90}>
                        {
                        scoreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))}             
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
              
    )

}


ScoreGraph.propTypes = {
    data: PropTypes.array
  }

export default ScoreGraph