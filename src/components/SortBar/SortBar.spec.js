import React from 'react'
import renderer from 'react-test-renderer'
import SortBar from './SortBar'

describe('SortBar Component', () => {
  it('renders correctly', () => {
    const Component = <SortBar handleOnSort={()=>{}} sortBy={{}} />

    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })
})