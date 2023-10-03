import BookList from '@/components/BookList'
import Title from '@/components/Title/Title'
import { memo } from 'react'

const Home = () => (
  <div className='pt-5 pb-10'>
    <Title>Seção de livros</Title>
    <BookList />
  </div>
)

export default memo(Home)
