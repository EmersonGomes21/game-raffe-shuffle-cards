import { render, screen } from '@testing-library/react'

import { AddPlayer } from '.'

describe('<AddPlayer/>', () => {
  it('should render the heading', () => {
    const { container } = render(<AddPlayer />)
    expect(
      screen.getByRole('heading', { name: /AddPlayer/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
