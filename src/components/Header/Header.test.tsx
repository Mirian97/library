import { GlobalProvider } from '@/contexts/GlobalContext'

import { render } from '@testing-library/react'
import Header from './Header'

const mockPathname = jest.fn()

jest.mock('next/navigation', () => ({
  usePathname: () => mockPathname
}))

const renderHeader = () => {
  return render(
    <GlobalProvider>
      <Header />
    </GlobalProvider>
  )
}

describe('Header', () => {
  beforeEach(() => {})

  it('should render header tag', () => {
    const { getByRole } = renderHeader()
    const headerElement = getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })

  it('should render link with title and logo of site', () => {
    const { getByText, getByRole, getByAltText } = renderHeader()
    const title = getByText(/livros conectados/i)
    const linkElement = getByRole('link')
    const imageElement = getByAltText(/logo/i)

    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('text-xl text-white font-bold max-w-[150px]')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/livros')
    expect(imageElement).toBeInTheDocument()
  })
  // TODO: fazer teste de renderização condicional botão de ícones caso o caminho for diferente de '/livros'
})
