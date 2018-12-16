import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Link from './Link'

describe('Link Component', () => {
  let handleOnClickMock
  let Component

  beforeEach(() => {
    handleOnClickMock = jest.fn()
    Component = <Link 
      field="Stars" 
      label="Stars" 
      clickHandle={handleOnClickMock} 
      sortBy={{key: 'Stars', order: 'desc'}} 
    />
  })

  it('renders correctly when field same as sort by key', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when field is not same as sort by key', () => {
    Component = <Link 
      field="Distance" 
      label="Distance" 
      clickHandle={handleOnClickMock} 
      sortBy={{key: 'Stars', order: 'desc'}} 
    />    
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })  

  it('calls clickHandle onclick', () => {
    const wrapper = shallow(Component)
    wrapper.simulate('click')
    expect(handleOnClickMock).toHaveBeenCalled()
  })
})