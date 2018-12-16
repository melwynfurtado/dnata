import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from './Search'

describe('Search Component', () => {
  let handleOnQueryChange
  let Component

  beforeEach(() => {
    handleOnQueryChange = jest.fn()
    Component = <Search handleOnQueryChange={handleOnQueryChange} />
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls handleOnQueryChange on query change', () => {
    const wrapper = shallow(Component)
    wrapper.find('#hotelName').simulate('change')
    expect(handleOnQueryChange).toHaveBeenCalled()
  })
})