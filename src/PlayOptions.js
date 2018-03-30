import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { COLOR_MODE_DARK, COLOR_MODE_NORMAL } from './colors'

const DIFFICULTY_EASY = 4000
const DIFFICULTY_NORMAL = 2800
const DIFFICULTY_HARD = 1500

class PlayOptions extends Component {
  state = {
    difficulty: DIFFICULTY_NORMAL,
    colorMode: COLOR_MODE_NORMAL
  }

  handleDifficultyChange = event => {
    this.setState({
      difficulty: +event.target.value
    })
  }

  handleColorModeChange = event => {
    this.setState({
      colorMode: event.target.value
    })
  }

  playAsHuman = () => {
    this.props.onPlay(false, this.state.difficulty, this.state.colorMode)
  }

  playAsRobot = () => {
    this.props.onPlay(true, this.state.difficulty, this.state.colorMode)
  }

  render() {
    return (
      <div className="play-options">
        <div className="field">
          <label className="label">Difficulty</label>
          <div className="select is-primary">
            <select value={this.state.difficulty} onChange={this.handleDifficultyChange}>
              <option value={DIFFICULTY_EASY}>Easy</option>
              <option value={DIFFICULTY_NORMAL}>Normal</option>
              <option value={DIFFICULTY_HARD}>Hard</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Colors</label>
          <div className="select is-primary">
            <select value={this.state.colorMode} onChange={this.handleColorModeChange}>
              <option value={COLOR_MODE_NORMAL}>Normal</option>
              <option value={COLOR_MODE_DARK}>Dark</option>
            </select>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <a className="button is-primary" onClick={this.playAsHuman}>
              Play as human
            </a>
          </div>
          <div className="column">
            <a className="button" onClick={this.playAsRobot}>
              Play as robot
            </a>
          </div>
        </div>
      </div>
    )
  }
}

PlayOptions.propTypes = {
  onPlay: PropTypes.func.isRequired
}

export default PlayOptions
