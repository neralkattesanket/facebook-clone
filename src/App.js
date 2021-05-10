import './App.css';
import Header from './Header'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Feed from "./Feed"
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <AppBody>
        <Sidebar/>
        <Feed/>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display : flex ;
`