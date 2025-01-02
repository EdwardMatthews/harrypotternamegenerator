import { nameData } from '@/data/nameData'
import { houseData } from '@/data/houseData'
import type { House, HouseTraits } from '@/types/houses'

type Gender = 'male' | 'female' | 'random'

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function getNamesByInitial(initial: string, gender: 'male' | 'female') {
  const data = gender === 'male' ? nameData.male : nameData.female
  return data.find(set => set.initial.toLowerCase() === initial.toLowerCase()) || null
}

function generateRandomInitial(): string {
  const maleInitials = nameData.male.map(set => set.initial)
  const femaleInitials = nameData.female.map(set => set.initial)
  const allInitials = maleInitials.concat(femaleInitials).filter(
    (initial, index, array) => array.indexOf(initial) === index
  )
  return getRandomElement(allInitials)
}

// 检查名字是否符合学院风格
function matchesHouseStyle(name: string, house: House): boolean {
  const patterns = houseData[house].namePatterns
  const nameLower = name.toLowerCase()
  
  // 检查前缀
  const hasMatchingPrefix = patterns.prefixes.some(prefix => 
    nameLower.startsWith(prefix.toLowerCase())
  )
  
  // 检查后缀
  const hasMatchingSuffix = patterns.suffixes.some(suffix => 
    nameLower.endsWith(suffix.toLowerCase())
  )
  
  // 如果是姓氏，检查家族名模式
  const hasMatchingFamilyPattern = patterns.familyNamePatterns.some(pattern => 
    nameLower.includes(pattern.toLowerCase())
  )
  
  return hasMatchingPrefix || hasMatchingSuffix || hasMatchingFamilyPattern
}

function generateSingleName(traits: HouseTraits): string {
  const { gender = 'random', house, firstInitial, lastInitial } = traits
  
  // 确定实际使用的性别
  const actualGender: 'male' | 'female' = gender === 'random'
    ? Math.random() > 0.5 ? 'male' : 'female'
    : gender

  // 生成或使用提供的首字母
  const firstNameInitial = firstInitial || generateRandomInitial()
  const lastNameInitial = lastInitial || generateRandomInitial()

  // 获取符合首字母的名字集
  const firstNameSet = getNamesByInitial(firstNameInitial, actualGender)
  const lastNameSet = getNamesByInitial(lastNameInitial, actualGender)

  // 从名字集中筛选符合学院风格的名字，如果没有则使用原始集合
  let firstNames = firstNameSet?.firstnames || []
  let lastNames = lastNameSet?.lastnames || []

  if (house && house in houseData) {
    // 如果指定了学院，优先选择符合学院风格的名字
    const houseFirstNames = firstNames.filter(name => matchesHouseStyle(name, house))
    const houseLastNames = lastNames.filter(name => matchesHouseStyle(name, house))

    // 如果找到了符合学院风格的名字，就使用它们
    if (houseFirstNames.length > 0) firstNames = houseFirstNames
    if (houseLastNames.length > 0) lastNames = houseLastNames
  }

  // 随机选择名字
  const firstName = firstNames.length
    ? getRandomElement(firstNames)
    : 'Unknown'
  const lastName = lastNames.length
    ? getRandomElement(lastNames)
    : 'Unknown'

  return `${firstName} ${lastName}`
}

export function generateNames(count: number, traits: HouseTraits): string[] {
  const names = new Set<string>()
  
  while (names.size < count) {
    const name = generateSingleName(traits)
    if (name !== 'Unknown Unknown') {
      names.add(name)
    }
  }
  
  return Array.from(names)
}

export function generateNameFromInitials(
  traits: HouseTraits
): string {
  return generateSingleName(traits)
}
