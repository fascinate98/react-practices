import ReactDom from 'react-dom';

import { App } from './App.js';


//돔에피아 안씀
//document
 //   .getElementById('root')
//    .appendChild(App());
ReactDom.render(App(), document.getElementById('root'));
