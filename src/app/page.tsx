import BookItem from '@/components/BookItem'

const Home = () => {
  return (
    <div className='pt-3'>
      <h2 className='font-bold text-3xl text-primary-500 text-center'>Seção de livros</h2>
      <div className='flex flex-wrap justify-evenly gap-6 mt-5'>
        <BookItem />
      </div>
    </div>
  )
}

export default Home
