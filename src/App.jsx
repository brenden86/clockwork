import { useState } from 'react'
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './app.scss';
import './styles/global.scss';

function App() {

  return (
    <div id='app-container'>
      <Header/>
      <MainContent/>
    </div>
  )
}

export default App
