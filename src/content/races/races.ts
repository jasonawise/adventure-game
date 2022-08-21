import { RaceTypes } from './types'

export const races: Array<RaceTypes> = [
  {
    name: 'Human',
    id: 1,
    statModifiers: {
      intelligence: 1,
      dexterity: 0,
      charisma: 1,
      strength: 1,
      constitution: 1,
      wisdom: 0,
    },
  },
  {
    name: 'Dwarf',
    id: 2,
    statModifiers: {
      intelligence: 0,
      dexterity: 0,
      charisma: 0,
      strength: 2,
      constitution: 2,
      wisdom: 0,
    },
  },
  {
    name: 'Elf',
    id: 3,
    statModifiers: {
      intelligence: 1,
      dexterity: 2,
      charisma: 0,
      strength: 0,
      constitution: 0,
      wisdom: 1,
    },
  },
]
