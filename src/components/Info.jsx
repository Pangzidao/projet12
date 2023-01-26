import styles from '../styles/Info.module.css'


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

export default Info