import React from 'react'
import renderer from 'react-test-renderer'
import Stars from './Stars'

describe('Stars Component', () => {
  it('renders correctly for 5 stars', () => {
    const Component = <Stars stars={5} />
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly for 3 stars', () => {
    const Component = <Stars stars={3} />
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })  
})