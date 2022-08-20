import React from 'react'
import CreateCharacter from './components/CreateCharacter'
import MainMenu from './views/MainMenu'
import ScreenWrapper from './views/ScreenWrapper'

function App() {
  return (
    <div className="App">
      <ScreenWrapper>
        <MainMenu />
        <CreateCharacter />
      </ScreenWrapper>
    </div>
  )
}

export default App
