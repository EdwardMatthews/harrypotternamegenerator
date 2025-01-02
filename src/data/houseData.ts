import { type House } from '@/types/houses'

export const houseData: Record<House, {
  traits: string[]
  namePatterns: {
    prefixes: string[]
    suffixes: string[]
    familyNamePatterns: string[]
  }
  wordRoots: {
    firstNames: {
      prefixes: string[]
      suffixes: string[]
    }
    lastNames: {
      prefixes: string[]
      suffixes: string[]
    }
  }
}> = {
  gryffindor: {
    traits: ['brave', 'courageous', 'chivalrous', 'determined'],
    namePatterns: {
      prefixes: ['god', 'al', 'har', 'ron', 'nev'],
      suffixes: ['us', 'ry', 'ric', 'ur', 'fred'],
      familyNamePatterns: ['er', 'ley', 'on', 'dor']
    },
    wordRoots: {
      firstNames: {
        prefixes: ['god', 'al', 'har', 'nev', 'min'],
        suffixes: ['us', 'ry', 'ric', 'ur', 'fred']
      },
      lastNames: {
        prefixes: ['pot', 'weas', 'long', 'gryffin'],
        suffixes: ['er', 'ley', 'dor', 'bottom']
      }
    }
  },
  slytherin: {
    traits: ['ambitious', 'cunning', 'resourceful', 'determined'],
    namePatterns: {
      prefixes: ['sal', 'sev', 'drac', 'reg', 'luci'],
      suffixes: ['us', 'ax', 'ix', 'ius', 'or'],
      familyNamePatterns: ['in', 'ow', 'ack', 'oy']
    },
    wordRoots: {
      firstNames: {
        prefixes: ['sal', 'sev', 'drac', 'reg', 'luci'],
        suffixes: ['us', 'ax', 'ix', 'ius', 'or']
      },
      lastNames: {
        prefixes: ['mal', 'slyth', 'black', 'lest'],
        suffixes: ['oy', 'in', 'ange', 'ow']
      }
    }
  },
  ravenclaw: {
    traits: ['wise', 'creative', 'witty', 'intellectual'],
    namePatterns: {
      prefixes: ['row', 'fil', 'cho', 'lun', 'mar'],
      suffixes: ['na', 'ius', 'a', 'ena', 'ia'],
      familyNamePatterns: ['claw', 'good', 'ang', 'ater']
    },
    wordRoots: {
      firstNames: {
        prefixes: ['row', 'fil', 'lun', 'hel', 'xen'],
        suffixes: ['na', 'ius', 'a', 'ena', 'ia']
      },
      lastNames: {
        prefixes: ['raven', 'love', 'clear', 'corn'],
        suffixes: ['claw', 'good', 'water', 'er']
      }
    }
  },
  hufflepuff: {
    traits: ['loyal', 'dedicated', 'fair', 'patient'],
    namePatterns: {
      prefixes: ['hel', 'ced', 'pom', 'han', 'sus'],
      suffixes: ['ga', 'ric', 'ona', 'ah', 'an'],
      familyNamePatterns: ['puff', 'ot', 'ory', 'es']
    },
    wordRoots: {
      firstNames: {
        prefixes: ['hel', 'ced', 'pom', 'han', 'ern'],
        suffixes: ['ga', 'ric', 'ona', 'ah', 'an']
      },
      lastNames: {
        prefixes: ['huffle', 'abb', 'digg', 'bon'],
        suffixes: ['puff', 'ott', 'ory', 'es']
      }
    }
  }
}
