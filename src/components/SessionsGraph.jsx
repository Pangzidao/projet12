import { LineChart, Line, XAxis, YAxis,Tooltip, ResponsiveContainer} from 'recharts';
import styles from '../styles/SessionsGraph.module.css'
import PropTypes from 'prop-types';

/**
 * A component that renders a line chart to display the average session duration.
 * @function
 * @param {Object} props - The properties of the component
 * @param {Array} props.data - An array of objects containing session duration data, where each object has the properties "day" (the day of the week) and "minutes" (the average session duration in minutes).
 * @returns {JSX.Element} A JSX component that displays a line chart of session duration data.
 */


function SessionsGraph(props){

    const sessionsData = props.data

    
    /**
 * Format Tooltip
 * @param {array} payload - source data
 * @param {boolean} active - is Tootip active
 * @returns the value when a dot on the line is pointed
 */
    function CustomToolTypeSessionDuration({payload, active}){
      if(active){
        console.log(payload[0].value)
          return (
              <div className='sessionDurationChartTooltip'>
                  <div>{`${payload[0].value}`}min</div>
              </div>
          )
      }
      return null
  }

  /**
 * Animate background format when moving the cursor on the chart line
 * @param {event} e - move of the mouse
 * @returns darker background from the pointed dot
 */
  function customMouseMove(e){
    let sessionWrap = document.querySelector('.sessionDurationWrap');
    if (e.isTooltipActive) {
      let windowWidth = sessionWrap.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );
      
      sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%, rgba(0,0,0,0.1) 100%)`;
    }
    else{
        sessionWrap.style.background ='red'
    }
}

/**
* Animate background format when moving the cursor out of a line dot
* @param {event} e - move of the mouse
* @returns initial background
*/
function customOnMouseOut(){
    let sessionWrap = document.querySelector('.sessionDurationWrap');
    sessionWrap.style.background ='red'
}
    
    return(
      <div className="sessionDurationWrap">
        <h2 className={styles.title}>Durée moyenne des sessions</h2>
        <ResponsiveContainer width='100%' height={150}>
            <LineChart width={500} height={300} data={sessionsData}
             onMouseMove={(e) => customMouseMove(e)}
             onMouseOut={() => customOnMouseOut()}
            >
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
               <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} />
              <Line type="natural" dataKey="minutes" stroke="#FFFFFF" dot={false}/>
            </LineChart>
          </ResponsiveContainer>
      </div>
      
    ) 
}

SessionsGraph.propTypes = {
  data: PropTypes.array
}

export default SessionsGraph