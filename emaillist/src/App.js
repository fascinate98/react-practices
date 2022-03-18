import React from 'react'
import './assets/scss/App.scss';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

const App = () => {
  return (
    <div className={'App'}>
      <RegisterForm/>
      <SearchBar/>
      <Emaillist/>
    </div>
  )
}

export default App