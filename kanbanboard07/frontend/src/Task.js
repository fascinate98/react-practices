import React, {useState} from 'react'
import styles from './assets/css/Task.css';

const Task = ({name, done,  deleteCallback, updateCallback, no}) => {
  
  return (
    <li className={styles.TaskList__Task}>
        <input
          type='checkbox'
          checked={done === 'Y'}
          onClick={e => {
            const newTask={
             
              done :  done === 'Y' ? "N": "Y",
              no : no
            }
            updateCallback(newTask);
          }} />
        {name}
        <a href='#' className={styles.TaskList__Task__remove} onClick= {() => deleteCallback(no)}></a>
    </li>
  );
}

export default Task;