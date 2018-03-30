import React from 'react'
import { shallow } from 'enzyme'
import Results from './Results'

it('renders without crashing', () => {
  const results = []
  shallow(<Results results={results} difficulty={2800} onPlay={() => void 0} />)
})
