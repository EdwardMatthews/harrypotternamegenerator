export type House = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff'

export type BloodStatus = 'pureblood' | 'halfblood' | 'muggleborn'

export interface HouseTraits {
  house?: House
  bloodStatus?: BloodStatus
  gender: 'male' | 'female' | 'random'
  useInitials?: boolean
  firstInitial?: string
  lastInitial?: string
}
