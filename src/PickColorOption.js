import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PickColorOption extends Component {
  handleClick = () => {
    this.props.onOptionSelected(this.props.option)
  }

  render() {
    const { option } = this.props
    return (
      <div className="column">
        <a
          className="button option"
          style={{
            borderColor: option.colorValue
          }}
          onClick={this.handleClick}
        >
          {option.displayText}
        </a>
      </div>
    )
  }
}

PickColorOption.propTypes = {
  option: PropTypes.object.isRequired,
  onOptionSelected: PropTypes.func.isRequired
}

export default PickColorOption
