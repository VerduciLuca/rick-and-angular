<<<<<<< HEAD
export interface CharacterDetail  {
=======
export interface CharacterDetail {
>>>>>>> d8d17ee3e81de15705ad1e0dac974d369ac75f7c
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

