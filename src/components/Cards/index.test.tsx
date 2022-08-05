import { render, screen } from '@testing-library/react'

import { Cards } from '.'

describe('<Cards/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Cards />)
    expect(
      screen.getByRole('heading', { name: /Cards/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
