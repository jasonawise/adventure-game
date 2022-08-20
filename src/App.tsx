/* eslint-disable react/jsx-no-bind */
import React from 'react'
import CreateCharacter from './components/CreateCharacter'
import MainMenu from './views/MainMenu'
import ScreenWrapper from './views/ScreenWrapper'

function App() {
  const [menuChoice, setMenuChoice] = React.useState<number>(0)

  function onMenuChoice(e: {
    currentTarget: { id: React.SetStateAction<number> }
  }) {
    setMenuChoice(e.currentTarget.id)
  }
  return (
    <div className="App">
      <ScreenWrapper>
        <MainMenu handleMenuChoice={onMenuChoice} />
        <CreateCharacter />
      </ScreenWrapper>
    </div>
  )
}

export default App
