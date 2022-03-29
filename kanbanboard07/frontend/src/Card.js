import { object } from 'prop-types';
import React, {useState, useEffect} from 'react'
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description}) => {
  const[tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(async () => {
    try {  
      const response = await fetch(`/api/task?cardNo=${no}`, {
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks(json.data);
    } catch(err) {
      console.log(err);      
    }  
  }, []);

  const notifyDeleteTask = async function(taskno) {
    try {  
      const response = await fetch(`/api/task?no=${taskno}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      
      setTasks(tasks.filter(t => t.no !== taskno));
    } catch(err) {
      console.log(err);      
    }     
  }

  const notifyAddTask = async function(task) {
    

    try {  
      const response = await fetch(`/api/task`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      
      setTasks([json.result, ...tasks]);
    } catch(err) {
      console.log(err);      
    }     
  }

  
  const notifyUpdateTask = async function(task) {
    console.log(task);
    try {  
      const response = await fetch(`/api/task`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      const updateTask = tasks.map((tasks) => {
        if(tasks.no === task.no){
          tasks.done = task.done;
        }
        return tasks;
      });
      setTasks(updateTask);
    } catch(err) {
      console.log(err);      
    }     
  }


  
  return (
    <div className={styles.Card}>
        <div
          className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
          onClick={() => {
            console.log(`fecth task(/api/task?cardNo=${no}...`);
            setShowDetails(!showDetails);
          }}>
          {title}
        </div>
        {
          showDetails ? 
            <div className={styles.Card__Details}>
              {description}
              <TaskList  no = {no} tasks={tasks} deleteCallback={notifyDeleteTask} addCallback={notifyAddTask} updateCallback={notifyUpdateTask}/>
            </div> :
            null
        }
    </div>
  )
}

export default Card;