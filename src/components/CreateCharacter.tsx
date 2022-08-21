import * as React from 'react'
import { races } from '../content/races'

export default function CreateCharacter(): JSX.Element {
  console.log('here')
  const [selectedRaceId, setSelectedRaceId] = React.useState<number>(0)

  const handleSelect = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    setSelectedRaceId(e.currentTarget.value)
  }

  return (
    <div>
      <h2>Create Character</h2>

      <label htmlFor="characters">Select your race: </label>
      <select
        name="characters"
        id="characters"
        className="border border-black rounded-md py-1 px-2"
        value={selectedRaceId}
        onChange={handleSelect}
      >
        <option value={0}>Select</option>
        {races.map((race) => (
          <option value={race.id}>{race.name}</option>
        ))}
      </select>
    </div>
  )
}
