import * as React from 'react'

export default function MainMenu({ handleMenuChoice }: any) {
  function handleOnClick(e: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    handleMenuChoice(e)
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
