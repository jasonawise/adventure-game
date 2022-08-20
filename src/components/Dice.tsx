import * as React from 'react'
import randomNumber from '../utili/randomNumber'

export default function Dice(numberOfSides: number): JSX.Element {
  const [numberRolled, setNumberRolled] = React.useState<number>()

  React.useEffect(() => {
    if (numberOfSides) setNumberRolled(randomNumber(numberOfSides))
  }, [numberOfSides])

  return (
    <div>
      <p>Your roled: ${numberRolled}</p>
    </div>
  )
}
