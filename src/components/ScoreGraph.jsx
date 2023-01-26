import { PieChart, Pie, ResponsiveContainer} from 'recharts';
import styles from '../styles/ScoreGraph.module.css'


function ScoreGraph(props){

    const scoreData= props.data


    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Score</h2>
            <ResponsiveContainer width='100%' height={250}>
                <PieChart width={730} height={250}>
                    <Pie className={styles.sector} data={scoreData} 
                    dataKey="value" nameKey="name" cx="50%" cy="50%" 
                    outerRadius={80} fill='#FF0000' innerRadius={65}>             
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        
    )

}

export default ScoreGraph