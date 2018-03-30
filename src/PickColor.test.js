import React from 'react'
import { shallow } from 'enzyme'
import PickColor from './PickColor'

const test = {
  solution: {
    colorName: 'brown',
    colorValue: 'brown',
    displayText: 'grey'
  },
  options: [
    {
      colorName: 'red',
      colorValue: 'red',
      displayText: 'brown'
    },
    {
      colorName: 'purple',
      colorValue: 'purple',
      displayText: 'pink'
    }
  ]
}

it('renders without crashing', () => {
  const component = shallow(<PickColor test={test} progress={50} onOptionSelected={() => void 0} />)
  const progress = component.find('progress')
  expect(progress.text()).toEqual('50%')
  expect(progress.prop('value')).toEqual(50)
  const h1 = component.find('h1')
  expect(h1.text()).toEqual(test.solution.displayText)
  expect(h1.prop('style').color).toEqual(test.solution.colorValue)
})
