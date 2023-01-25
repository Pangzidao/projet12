import { PieChart, Pie, ResponsiveContainer} from 'recharts';



function ScoreGraph(props){

    const scoreData = props.data

    return(
        <ResponsiveContainer width='100%' height={200}>
            <PieChart width={730} height={250}>
            <Pie data={scoreData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart>
        </ResponsiveContainer>
        
    )

}

export default ScoreGraph