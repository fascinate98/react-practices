import React, {useState} from 'react'
import styles from './assets/css/Card.css';
import TaskList from './TaskList';


const Card = ({title, description, tasks}) => {
  const[foldStatus,setFoldStatus] = useState(false);
  const onChangeFold = function(e){
    setFoldStatus(e => e?false:true);
}
  return (
    <div className={styles.Card}>
          <div className={styles.Card__Title}
               value={foldStatus}
               onClick={onChangeFold}>{title}</div>
          <div className={styles.Card__Details}>
            {description}
            {foldStatus ? <TaskList tasks={tasks}/> : null}
          </div>
        </div>
  )
}

export default Card