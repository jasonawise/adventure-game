/* eslint-disable react/jsx-no-bind */
import React from 'react'
import CreateCharacter from './components/CreateCharacter'
import MainMenu from './views/MainMenu'
import ScreenWrapper from './views/ScreenWrapper'

function App() {
  const [menuChoice, setMenuChoice] = React.useState<number>(0)
  const [displayView, setDisplayView] = React.useState<number>(0)

  React.useEffect(() => {
    if (menuChoice) return setDisplayView(menuChoice)
  }, [menuChoice])

  function onMenuChoice(e: {
    currentTarget: { id: React.SetStateAction<number> }
  }) {
    setMenuChoice(e.currentTarget.id)
  }
  return (
    <div className="App">
      <ScreenWrapper>
        {displayView === 1 ? (
          <CreateCharacter />
        ) : (
          <MainMenu handleMenuChoice={onMenuChoice} />
        )}
      </ScreenWrapper>
    </div>
  )
}

export default App
