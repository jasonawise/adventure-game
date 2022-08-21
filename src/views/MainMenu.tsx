import * as React from 'react'
import { Link } from 'react-router-dom'

export default function MainMenu(): JSX.Element {
  return (
    <div>
      <h1 className="text-lg font-bold">Main Menu</h1>
      <Link to="/create-character">1. Create Character</Link>
    </div>
  )
}
