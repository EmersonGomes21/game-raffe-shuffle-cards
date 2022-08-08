import { render, screen } from '@testing-library/react'

import { FooterButtons } from '.'

describe('<FooterButtons/>', () => {
  it('should render the heading', () => {
    const { container } = render(<FooterButtons />)
    expect(
      screen.getByRole('heading', { name: /FooterButtons/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
