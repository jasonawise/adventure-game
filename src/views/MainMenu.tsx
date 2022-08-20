import * as React from 'react'

export default function MainMenu() {
  const [menuChoice, setMenuChoice] = React.useState<number>(0)

  function handleOnClick(e: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    setMenuChoice(e.currentTarget.id)
  }

  return (
    <div>
      <h1 className="text-lg font-bold">Main Menu</h1>
      <button type="button" id="1" onClick={handleOnClick}>
        1. Create Character
      </button>
    </div>
  )
}
