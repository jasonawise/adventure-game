/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateCharacter from './components/CreateCharacter'
import MainMenu from './views/MainMenu'
import ScreenWrapper from './views/ScreenWrapper'

function App() {
  return (
    <div className="App">
      <ScreenWrapper>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/create-character" element={<CreateCharacter />} />
        </Routes>
      </ScreenWrapper>
    </div>
  )
}

export default App
