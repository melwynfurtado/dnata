import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Pagination from './Pagination'

describe('Pagination Component', () => {
  let handleOnPaginateMock
  let Component

  beforeEach(() => {
    handleOnPaginateMock = jest.fn()
    Component = <Pagination 
      hotelCount={35} 
      page={1}
      perPage={20}
      handleOnPaginate={handleOnPaginateMock}
    />
  })

  it('renders correctly', () => {
    const tree = renderer
                  .create(Component)
                  .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls handleOnPaginate onclick of next', () => {
    const wrapper = shallow(Component)
    wrapper.find('.pagination .next a').simulate('click')
    expect(handleOnPaginateMock).toHaveBeenCalled()
  })

  it('does not call handleOnPaginate onclick of prev (disabled)', () => {
    const wrapper = shallow(Component)
    wrapper.find('.pagination .prev').simulate('click')
    expect(handleOnPaginateMock).not.toHaveBeenCalled()
  })  

  it('calls handleOnPaginate onclick of second page', () => {
    const wrapper = shallow(Component)
    wrapper.find('.pagination .page-item-2 a').simulate('click')
    expect(handleOnPaginateMock).toHaveBeenCalled()
  }) 
})