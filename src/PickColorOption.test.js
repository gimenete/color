import React from 'react'
import { shallow } from 'enzyme'
import PickColorOption from './PickColorOption'

it('renders without crashing', () => {
  const option = {
    displayText: 'green',
    colorValue: 'red'
  }
  const onOptionSelected = jest.fn()
  const component = shallow(<PickColorOption option={option} onOptionSelected={onOptionSelected} />)
  const button = component.find('.button')
  expect(button.text()).toEqual(option.displayText)
  component.find('.option').simulate('click', {})
  expect(onOptionSelected).toBeCalledWith(option)
})
