import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import PropTypes from 'prop-types'
import PickColor from './PickColor'
import { allColors } from './colors'
import { randomItem, shiftOption } from './common'

const TESTS_PER_GAME = 10
const ANIMATION_DURATION = 1000

class PickColorContainer extends Component {
  state = {
    test: null,
    testsShown: 0,
    progress: 0,
    results: []
  }

  componentDidMount() {
    this.showNextTest()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    clearTimeout(this.timeout)
  }

  findSolutionInspectingDOM() {
    // the robot should act like a human
    // analyzing the DOM to find the correct response
    const options = Array.from(this.dom.querySelectorAll('.option'))
    const solution = options.find(
      element => element.innerText === this.state.test.solution.colorName
    )
    solution.click() // trigger click on solution
  }

  startInterval() {
    const { isRobot, difficulty } = this.props
    const endAtProgress = isRobot ? Math.ceil(Math.random() * 100) : 100 // the robot wins at a random progress
    this.interval = setInterval(() => {
      if (this.state.progress === endAtProgress) {
        if (isRobot) {
          this.findSolutionInspectingDOM()
        } else {
          this.played(false)
        }
      }
      this.setState(prevState => ({
        progress: prevState.progress + 1
      }))
    }, difficulty / 100)
  }

  showNextTest() {
    const colors = shuffle(allColors[this.props.colorMode])
    const solution = shiftOption(colors)
    const test = {
      solution,
      options: [shiftOption(colors), shiftOption(colors)]
    }
    const option = randomItem(test.options)
    option.displayText = solution.colorName

    clearInterval(this.interval)
    this.setState(prevState => ({
      test,
      progress: 0,
      testsShown: prevState.testsShown + 1,
      timestamp: Date.now()
    }))
    this.startInterval()
  }

  optionSelected = option => {
    this.played(option.displayText === this.state.test.solution.colorName)
  }

  storePickColorRef = dom => {
    this.dom = dom
  }

  played(success) {
    const time = Date.now() - this.state.timestamp
    this.setState(prevState => ({
      results: [
        ...this.state.results,
        {
          time,
          success
        }
      ],
      animation: success ? 'tada' : 'shake'
    }))
    clearInterval(this.interval)
    this.waitForAnimationAndContinue()
  }

  waitForAnimationAndContinue() {
    // wait for animation to finish
    this.timeout = setTimeout(() => {
      this.setState({ animation: null })
      if (this.state.testsShown === TESTS_PER_GAME) {
        this.props.onFinish(this.state.results)
      } else {
        this.showNextTest()
      }
    }, ANIMATION_DURATION)
  }

  render() {
    if (!this.state.test) return null
    const className = [
      this.props.isRobot ? 'robot' : '',
      this.state.animation ? 'animated ' + this.state.animation : ''
    ].join(' ')
    return (
      <div ref={this.storePickColorRef} className={className}>
        <PickColor
          progress={this.state.progress}
          onOptionSelected={this.optionSelected}
          test={this.state.test}
        />
        {this.props.isRobot && (
          <span role="img" className="robot-indicator" aria-label="Robot mode">
            🤖
          </span>
        )}
      </div>
    )
  }
}

PickColorContainer.propTypes = {
  isRobot: PropTypes.bool.isRequired,
  colorMode: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  onFinish: PropTypes.func.isRequired
}

export default PickColorContainer
