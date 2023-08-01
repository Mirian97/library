import BookItem from '@/components/BookItem'
import Title from '@/components/Title'

const Home = () => {
  return (
    <div className='pt-3'>
      <Title>Seção de livros</Title>
      <div className='flex flex-wrap justify-evenly gap-6 mt-5'>
        <BookItem />
      </div>
    </div>
  )
}

export default Home
