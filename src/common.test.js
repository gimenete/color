import { calculateHitsPercentage, calculateScore, randomItem, shiftOption } from './common'
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
