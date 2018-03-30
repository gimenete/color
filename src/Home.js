import React from 'react'
import PropTypes from 'prop-types'
import PlayOptions from './PlayOptions'

const Home = ({ onPlay }) => {
  return (
    <div className="home">
      <h1>Color</h1>
      <PlayOptions onPlay={onPlay} />
    </div>
  )
}

Home.propTypes = {
  onPlay: PropTypes.func.isRequired
}

export default Home
