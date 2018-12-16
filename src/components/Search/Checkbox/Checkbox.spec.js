import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox'

describe('Checkbox Component', () => {
  let handleOnChangeMock
  let Component

  beforeEach(() => {
    handleOnChangeMock = jest.fn()
    Component = <Checkbox id="5star" value="5" handleChange={handleOnChangeMock}>5 stars</Checkbox>
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls handleChange onchange', () => {
    const wrapper = shallow(Component)
    wrapper.find('.form-check-input').simulate('change')
    expect(handleOnChangeMock).toHaveBeenCalled()
  })
})