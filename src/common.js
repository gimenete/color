import shuffle from 'lodash.shuffle'
import { allColors } from './colors'

// These two functions could be considered selectors in the redux jargon
// Then cam be memoized

export const calculateHitsPercentage = results => {
  const hits = results.reduce((total, result) => {
    return total + (result.success ? 1 : 0)
  }, 0)
  return Math.round(hits * 100 / results.length)
}

export const calculateScore = (results, difficulty) => {
  const absoluteScore = results.reduce((total, result) => {
    return total + (result.success ? difficulty - result.time : 0)
  }, 0)
  return Math.round(absoluteScore * 100 / (results.length * difficulty))
}

export const randomItem = items => {
  return items[Math.floor(Math.random() * items.length)]
}

export const shiftOption = colors => {
  const a = colors.shift()
  const b = colors.shift()
  return {
    colorName: a.name,
    colorValue: a.value,
    displayText: b.name
  }
}

export const generateTest = colorMode => {
  const colors = shuffle(allColors[colorMode])
  const solution = shiftOption(colors)
  const test = {
    solution,
    options: [shiftOption(colors), shiftOption(colors)]
  }
  const option = randomItem(test.options)
  option.displayText = solution.colorName
  return test
}

// These functions could be converted to redux acitons

export const getInitialGameState = () => []

export const addResult = (gameState, action) => {
  const { success, time } = action
  return [
    ...gameState,
    {
      time,
      success
    }
  ]
}
