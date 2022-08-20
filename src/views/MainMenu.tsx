import * as React from 'react'

export default function MainMenu() {
  const [menuChoice, setMenuChoice] = React.useState<number>(0)

  function handleOnClick({ event: { target: id } }: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setMenuChoice(id)
  }

  return (
    <div>
      <h1>Main Menu</h1>
      <button type="button" id="1" onClick={handleOnClick}>
        1. Create Character
      </button>
    </div>
  )
}
