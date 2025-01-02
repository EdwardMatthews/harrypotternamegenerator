'use client'

import { useState } from 'react'
import { generateNames, generateNameFromInitials } from '@/lib/nameGenerator'
import type { House, HouseTraits } from '@/types/houses'

type Gender = 'male' | 'female' | 'random'

const HOUSES: { value: House; label: string; color: string }[] = [
  { value: 'gryffindor', label: 'Gryffindor', color: 'bg-red-600 hover:bg-red-500' },
  { value: 'slytherin', label: 'Slytherin', color: 'bg-green-600 hover:bg-green-500' },
  { value: 'ravenclaw', label: 'Ravenclaw', color: 'bg-blue-600 hover:bg-blue-500' },
  { value: 'hufflepuff', label: 'Hufflepuff', color: 'bg-yellow-600 hover:bg-yellow-500' }
]

export default function NameGenerator({ initialNames }: { initialNames: string[] }) {
  const [names, setNames] = useState(initialNames)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedGender, setSelectedGender] = useState<Gender>('random')
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null)
  const [firstInitial, setFirstInitial] = useState('')
  const [lastInitial, setLastInitial] = useState('')
  const [useInitials, setUseInitials] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    
    const traits: HouseTraits = {
      gender: selectedGender,
      house: selectedHouse || undefined,
      useInitials,
      firstInitial: useInitials ? firstInitial : undefined,
      lastInitial: useInitials ? lastInitial : undefined
    }

    const newNames = generateNames(10, traits)
    setNames(newNames)
    setIsGenerating(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 shadow-xl">
        <div className="mb-6 space-y-6">
          {/* 学院选择 */}
          <div className="space-y-2">
            <h3 className="text-center text-purple-300 mb-3">Choose Your House</h3>
            <div className="grid grid-cols-2 gap-3">
              {HOUSES.map(house => (
                <button
                  key={house.value}
                  onClick={() => setSelectedHouse(selectedHouse === house.value ? null : house.value)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedHouse === house.value
                      ? house.color + ' text-white'
                      : 'bg-purple-900/20 text-purple-300 hover:bg-purple-800/30'
                  }`}
                >
                  {house.label}
                </button>
              ))}
            </div>
          </div>

          {/* 性别选择 */}
          <div className="space-y-2">
            <h3 className="text-center text-purple-300 mb-3">Choose Your Gender</h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedGender('male')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedGender === 'male'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-800/30'
                }`}
              >
                Wizard
              </button>
              <button
                onClick={() => setSelectedGender('female')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedGender === 'female'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-800/30'
                }`}
              >
                Witch
              </button>
              <button
                onClick={() => setSelectedGender('random')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedGender === 'random'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-800/30'
                }`}
              >
                Surprise Me
              </button>
            </div>
          </div>

          {/* 首字母选择 */}
          <div className="space-y-2">
            <div className="flex items-center justify-center mb-4">
              <label className="flex items-center space-x-2 text-purple-300">
                <input
                  type="checkbox"
                  checked={useInitials}
                  onChange={(e) => setUseInitials(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-purple-600 rounded border-purple-400 focus:ring-purple-500"
                />
                <span>Use Specific Initials</span>
              </label>
            </div>

            {useInitials && (
              <div className="flex justify-center gap-4">
                <div>
                  <label className="block text-sm text-purple-300 mb-1">First Name Initial</label>
                  <input
                    type="text"
                    maxLength={1}
                    value={firstInitial}
                    onChange={(e) => setFirstInitial(e.target.value.toUpperCase())}
                    className="w-12 px-2 py-1 bg-purple-900/20 border border-purple-500/30 rounded text-center text-purple-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-purple-300 mb-1">Last Name Initial</label>
                  <input
                    type="text"
                    maxLength={1}
                    value={lastInitial}
                    onChange={(e) => setLastInitial(e.target.value.toUpperCase())}
                    className="w-12 px-2 py-1 bg-purple-900/20 border border-purple-500/30 rounded text-center text-purple-200 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 生成的名字列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {names.map((name, index) => (
            <div
              key={index}
              className="bg-purple-800/20 p-4 rounded-lg border border-purple-600/30 hover:border-purple-500/50 transition-colors"
            >
              <p className="text-lg text-center font-medium text-purple-200">{name}</p>
            </div>
          ))}
        </div>

        {/* 生成按钮 */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating || (useInitials && (!firstInitial || !lastInitial))}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Casting Spell...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.893 9.53784C20.7864 9.44684 20.6557 9.38659 20.5152 9.36285C20.3747 9.33911 20.2298 9.35272 20.0968 9.40232C19.9638 9.45193 19.8475 9.53582 19.76 9.64505L18.59 11.1651C17.5289 9.71819 16.0342 8.62661 14.3208 8.0493C12.6075 7.47199 10.7629 7.43767 9.02853 7.95053C7.29416 8.46339 5.75865 9.50034 4.63319 10.9007C3.50774 12.301 2.84814 14.0024 2.74853 15.7751C2.64892 17.5477 3.11326 19.3098 4.08186 20.8239C5.05046 22.3379 6.47883 23.5345 8.16447 24.2516C9.85011 24.9687 11.7152 25.1753 13.5213 24.8447C15.3274 24.5142 16.9929 23.6618 18.3 22.3951" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12L12 16L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Generate New Names
            </>
          )}
        </button>
      </div>
    </div>
  )
}
