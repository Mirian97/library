import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Loading from './Loading'

const renderLoading = () => render(<Loading className='custom-class' />)

describe('Loading', () => {
  it('should render loading image correctly', () => {
    const { getByAltText } = renderLoading()
    const loadingImage = getByAltText(/Carregando.../i)

    expect(loadingImage).toBeInTheDocument()
    expect(loadingImage).toHaveAttribute('src')
    expect(loadingImage).toHaveAttribute('width', '80')
    expect(loadingImage).toHaveAttribute('height', '80')
  })

  it('should pass other HTML attributes', () => {
    const { getByAltText } = renderLoading()
    const loadingImage = getByAltText(/Carregando.../i)

    expect(loadingImage).toHaveClass('custom-class', { exact: true })
  })
})
