import React from 'react'
import { shallow } from 'enzyme'
import App, { STEP_HOME, STEP_PICK_COLOR, STEP_RESULTS } from './App'

it('renders without crashing', () => {
  shallow(<App />)
})

it('shows the home as initial state', () => {
  const component = shallow(<App />)
  expect(component.state('step')).toEqual(STEP_HOME)
})
