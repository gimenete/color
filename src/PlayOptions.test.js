import React from 'react'
import { shallow } from 'enzyme'
import PlayOptions from './PlayOptions'

it('renders without crashing', () => {
  shallow(<PlayOptions onPlay={() => void 0} />)
})
