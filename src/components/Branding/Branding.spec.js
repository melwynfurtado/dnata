import React from 'react'
import renderer from 'react-test-renderer'
import Branding from './Branding'

describe('Branding Component', () => {
  let Component

  beforeEach(() => {
    Component = <Branding />
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })
})