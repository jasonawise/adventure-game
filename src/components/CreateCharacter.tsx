import { races } from '../content/races'

export default function CreateCharacter(): JSX.Element {
  const handleSelect = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(e.currentTarget)
  }
  return (
    <div>
      <h2>Create Character</h2>

      <label htmlFor="characters">Select your race: </label>
      <select
        name="characters"
        id="characters"
        className="border border-black rounded-md py-1 px-2"
        // value={raceId}
        onChange={handleSelect}
      >
        {races.map((race) => (
          <option value={race.id}>{race.name}</option>
        ))}
      </select>
    </div>
  )
}
