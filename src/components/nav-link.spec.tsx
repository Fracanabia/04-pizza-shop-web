import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('nav-link', () => {
  it('should highlight the nav link when the is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/about']}>{children}</MemoryRouter>
          )
        },
      },
    )
    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
    wrapper.debug()
  })
})
