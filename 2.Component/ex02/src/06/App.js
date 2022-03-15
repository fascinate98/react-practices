import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

//additional..
import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';


const App = () => {
  library.add(faBell, far, fab);
  return (
    <div>
      {/*example*/}
      <FontAwesomeIcon icon={faBell}/>
      <FontAwesomeIcon icon={faCheckCircle}/>
      <FontAwesomeIcon icon={faTimesCircle}/>

      {/*solid*/}
      <FontAwesomeIcon icon={["fas", "bell"]}/>

      {/*regular*/}
      <FontAwesomeIcon icon={["far", "bell"]}/>

            {/*brand*/}
            <FontAwesomeIcon icon={["fab", "github"]}/>


    </div>
  )
}

export default App