import * as React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu({ handleMenuChoice }: any) {
  function handleOnClick(e: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    handleMenuChoice(e)
  }

  return (
    <div>
      <h1 className="text-lg font-bold">Main Menu</h1>
      <Link to="/create-character">1. Create Character</Link>
    </div>
  )
}
