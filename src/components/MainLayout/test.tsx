import { render, screen } from '@testing-library/react'
import { MainLayout } from '.'

describe('<MainLayout/>', () => {
  it('should render the heading', () => {
    const { container } = render(<MainLayout />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the colors correctly', () => {
    
    const { container } = render(<MainLayout />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
