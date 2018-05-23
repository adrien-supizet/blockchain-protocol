import React from 'react'
import { shallow } from 'enzyme'

import CreateAccount from './CreateAccount'

describe('CreateAccount', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<CreateAccount {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})