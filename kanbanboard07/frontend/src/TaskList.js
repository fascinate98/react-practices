import React from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';

const TaskList = ({ no , tasks , deleteCallback, addCallback, updateCallback}) => {

  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map((task) => <Task
                                    key={task.no}
                                    no={task.no}
                                    name={task.name}
                                    done={task.done} 
                                    deleteCallback={deleteCallback}
                                    updateCallback={updateCallback}
                                    /> 
                                    
                                    )}
            <input
              type='text'
              className={styles.TaskList__add_task}
              placeholder={'태스크 추가'}
              onKeyPress={e => {
                if(e.key === 'Enter') {
                  const newTask={
                    name : e.target.value,
                    done : "N",
                    cardNo : no

                  }

                
                  e.target.value='';
                  addCallback(newTask);

                  console.log(newTask)
                }
              }}/>
        </ul>
    </div>     
  );
}

export default TaskList