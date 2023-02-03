import styles from '../styles/Info.module.css'
import PropTypes from 'prop-types';

/**
 * Info component to display calorieCount, proteinCount, carbohydrateCount, and lipidCount in a container.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of data to display, such as calorieCount, proteinCount, carbohydrateCount, or lipidCount.
 * @param {Object} props.data - The key data to display, in the form of an object with properties such as calorieCount, proteinCount, carbohydrateCount, and lipidCount.
 * @param {string} props.logo - The logo URL of the data.
 * @param {string} props.name - The name of the data.
 * @param {string} props.unit - The unit of the data.
 * @param {string} props.logoBackground - The background color of the logo.
 * 
 * @return {JSX.Element} The Info component.
 */



function Info(props){
    const type = props.type
    const keyData = props.data
    
  
    return(
        <div className={styles.container}>
            <img src={props.logo} alt={props.name} className={styles.logo} style={{backgroundColor: props.logoBackground}}/>
            <div className={styles.text}>
                <h2>{keyData[type]}{props.unit}</h2>
                <p>{props.name}</p>
            </div>
            
        </div>
    )
}

Info.propTypes = {
    type: PropTypes.string,
    data: PropTypes.object
};

export default Info