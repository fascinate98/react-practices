import React, { useState }  from 'react'
import styles from './assets/css/Task.css';

const Task = ({no, name, done }) => {

  const [checkStatus, setCheckStatus] = useState(done===true?'yes':'no');
  const onChangeCheck = function(e) {
    const status = e.target.value === 'no'? 'yes' : 'no';

    setCheckStatus(status);
}


  return (
    
    <li className={styles.TaskList__Task}>
                  <input type='checkbox' 
                        //defaultChecked={done===true} 
                        name="checkStatus" 
                        value= { checkStatus } 
                        checked={ checkStatus === 'yes' } 
                        onChange={ onChangeCheck}/>
                  {name}
                  <a href='#' className={styles[`TaskList__Task--remove`]}></a>
                </li>
    )
}

export default Task