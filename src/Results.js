import React from 'react'
import PlayOptions from './PlayOptions'
import PropTypes from 'prop-types'
import { calculateHitsPercentage, calculateScore } from './common'

const Results = ({ onPlay, results, difficulty }) => {
  const percentage = calculateHitsPercentage(results)
  const score = calculateScore(results, difficulty)

  return (
    <div className="home">
      <h1>Hits: {percentage}%</h1>
      <h1>Score: {score} / 100</h1>
      <p>The score depends on the remaining time after choosing the color.</p>
      <p>A score of 100 means you answered correctly all colors in 0s</p>
      <PlayOptions onPlay={onPlay} />
    </div>
  )
}

Results.propTypes = {
  results: PropTypes.array.isRequired,
  difficulty: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired
}

export default Results
