import BookList from '@/components/BookList/BookList'
import Title from '@/components/Title/Title'
import { memo } from 'react'

const Home = () => (
  <div className='pt-5 pb-10' data-testid='books-page'>
    <Title>Seção de livros</Title>
    <BookList />
  </div>
)

export default memo(Home)
