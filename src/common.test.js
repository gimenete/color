import {
  calculateHitsPercentage,
  calculateScore,
  randomItem,
  shiftOption,
  generateTest,
  getInitialGameState,
  addResult
} from './common'
import { COLOR_MODE_NORMAL, allColors } from './colors'

it('calculates the hits percentage', () => {
  expect(
    calculateHitsPercentage([
      {
        time: 1,
        success: true
      },
      {
        time: 1,
        success: false
      }
    ])
  ).toEqual(50)
  expect(
    calculateHitsPercentage([
      {
        time: 1,
        success: true
      },
      {
        time: 1,
        success: true
      }
    ])
  ).toEqual(100)
  expect(
    calculateHitsPercentage([
      {
        time: 1,
        success: false
      },
      {
        time: 1,
        success: false
      }
    ])
  ).toEqual(0)
})

it('calculates the score', () => {
  const difficulty = 100
  expect(
    calculateScore(
      [
        {
          time: 0,
          success: true
        },
        {
          time: 0,
          success: true
        }
      ],
      difficulty
    )
  ).toEqual(100)
  expect(
    calculateScore(
      [
        {
          time: 10,
          success: true
        },
        {
          time: 20,
          success: true
        }
      ],
      difficulty
    )
  ).toEqual(85)
  expect(
    calculateScore(
      [
        {
          time: 1,
          success: false
        },
        {
          time: 1,
          success: false
        }
      ],
      difficulty
    )
  ).toEqual(0)
})

it('picks a random item', () => {
  const arr = [1, 2, 3]
  for (let i = 0; i < 10; i++) {
    expect(arr.indexOf(randomItem(arr))).toBeGreaterThanOrEqual(0)
  }
})

it('shifts color options', () => {
  const normalColors = allColors[COLOR_MODE_NORMAL]
  const colors = normalColors.slice(0) // copy
  const option = shiftOption(colors)
  expect(option.colorName).toEqual(normalColors[0].name)
  expect(option.colorValue).toEqual(normalColors[0].value)
  expect(option.displayText).toEqual(normalColors[1].name)
})

it('generates a test', () => {
  // Test many times to check randomness
  for (let i = 0; i < 40; i++) {
    const test = generateTest(COLOR_MODE_NORMAL)
    expect(test).toHaveProperty('solution')
    expect(test).toHaveProperty('options')

    const { solution, opitons } = test
    expect(solution).toHaveProperty('colorName')
    expect(solution).toHaveProperty('colorValue')
    expect(solution).toHaveProperty('displayText')

    const options = test.options
    expect(options).toHaveLength(2)
    for (const option of options) {
      expect(option).toHaveProperty('colorName')
      expect(option).toHaveProperty('colorValue')
      expect(option).toHaveProperty('displayText')
    }
    const successOptions = options.filter(option => option.displayText === solution.colorName)
    expect(successOptions).toHaveLength(1)
  }
})

it('returns the initial state', () => {
  expect(getInitialGameState()).toEqual([])
})

it('adds a test result to the game state', () => {
  const initialState = getInitialGameState()
  const result = { success: true, time: 100 }
  const state = addResult(initialState, result)
  expect(initialState !== state).toEqual(true)
  expect(state).toHaveLength(1)
  expect(state[0]).toEqual(result)
})
