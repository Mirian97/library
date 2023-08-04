import BookList from '@/components/BookList'
import Title from '@/components/Title'
import { memo } from 'react'

const Home = () => {
  return (
    <div className='pt-5 pb-10'>
      <Title>Seção de livros</Title>
      <BookList />
    </div>
  )
}

export default memo(Home)
