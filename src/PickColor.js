import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PickColorOption from './PickColorOption'

class PickColor extends Component {
  render() {
    const { test, progress, onOptionSelected } = this.props
    return (
      <div className="pick-color">
        <h1 className="title" style={{ color: test.solution.colorValue }}>
          {test.solution.displayText}
        </h1>
        <progress className="progress is-primary" value={progress} max="100">
          {progress}%
        </progress>
        <div className="columns buttons">
          {test.options.map((option, i) => (
            <PickColorOption key={i} option={option} onOptionSelected={onOptionSelected} />
          ))}
        </div>
      </div>
    )
  }
}

PickColor.propTypes = {
  test: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
  onOptionSelected: PropTypes.func.isRequired
}

export default PickColor
