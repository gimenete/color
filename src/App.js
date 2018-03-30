import React, { Component } from 'react'
import Home from './Home'
import PickColorContainer from './PickColorContainer'
import Results from './Results'

const STEP_HOME = 'STEP_HOME'
const STEP_PICK_COLOR = 'STEP_PICK_COLOR'
const STEP_RESULTS = 'STEP_RESULTS'

class App extends Component {
  state = {
    step: STEP_HOME
  }

  play = (isRobot, difficulty, colorMode) => {
    this.setState({ step: STEP_PICK_COLOR, isRobot, difficulty, colorMode })
  }

  finished = results => {
    this.setState({ step: STEP_RESULTS, results })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="game">
            {this.state.step === STEP_HOME && <Home onPlay={this.play} />}
            {this.state.step === STEP_PICK_COLOR && (
              <PickColorContainer
                onFinish={this.finished}
                isRobot={this.state.isRobot}
                difficulty={this.state.difficulty}
                colorMode={this.state.colorMode}
              />
            )}
            {this.state.step === STEP_RESULTS && (
              <Results
                results={this.state.results}
                onPlay={this.play}
                difficulty={this.state.difficulty}
              />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export { STEP_HOME, STEP_PICK_COLOR, STEP_RESULTS }

export default App
