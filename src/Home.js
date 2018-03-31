import React from 'react'
import PropTypes from 'prop-types'
import PlayOptions from './PlayOptions'

const Home = ({ onPlay }) => {
  return (
    <div className="home">
      <h1>Color</h1>
      <div className="notification is-primary">
        Instructions: you need to select the color of the word, not the text of the word itself
      </div>
      <PlayOptions onPlay={onPlay} />
    </div>
  )
}

Home.propTypes = {
  onPlay: PropTypes.func.isRequired
}

export default Home
