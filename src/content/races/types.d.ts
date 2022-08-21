export type StatModifiers = {
  strength: number
  intelligence: number
  dexterity: number
  constitution: number
  wisdom: number
  charisma: number
}

export type RaceTypes = {
  name: string
  id: number
  statModifiers: StatModifiers
}
