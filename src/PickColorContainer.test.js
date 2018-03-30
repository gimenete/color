import React from 'react'
import { shallow } from 'enzyme'
import PickColorContainer from './PickColorContainer'
import { COLOR_MODE_DARK, COLOR_MODE_NORMAL } from './colors'

it('renders without crashing', () => {
  shallow(
    <PickColorContainer
      isRobot
      colorMode={COLOR_MODE_NORMAL}
      difficulty={2800}
      onFinish={() => void 0}
    />
  )
})
