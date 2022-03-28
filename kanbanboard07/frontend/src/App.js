import React , {useState, useEffect} from 'react'
import KanbanBoard from './KanbanBoard';
import './assets/css/App.css';

const App = () => {

  const [cards, setCards] = useState([]);

  useEffect(async () => {
    try {  
      const response = await fetch('/api', {
        method: 'get',
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
      
      setCards(json.data);
    } catch(err) {
      console.log(err);      
    }  
  }, []);

  return (
    <KanbanBoard cards={cards}/>
  )
}

export default App;