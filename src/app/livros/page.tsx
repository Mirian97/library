import { BookList } from '@/components/BookList'
import Title from '@/components/Title'

const Livros = () => {
  return (
    <div className='pt-4'>
      <Title>Seção de livros</Title>
      <BookList />
    </div>
  )
}

export default Livros
