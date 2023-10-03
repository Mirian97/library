import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Loading from './Loading'

const renderLoading = () => render(<Loading />)

describe('Loading', () => {
  it('should return a string', () => {
    const { getByAltText } = renderLoading()
    const loadingImage = getByAltText('Carregando...')

    expect(loadingImage).toBeInTheDocument()
    expect(loadingImage).toHaveAttribute('src')
    expect(loadingImage).toHaveAttribute('width', '80')
    expect(loadingImage).toHaveAttribute('height', '80')
  })
})
