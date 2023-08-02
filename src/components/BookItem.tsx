import useGlobal from '@/hooks/useGlobal'
import IBookItem from '@/interfaces/IBookItem'

const BookItem = ({ id, volumeInfo }: IBookItem) => {
  const {
    title,
    authors,
    imageLinks: { thumbnail }
  } = volumeInfo
  const { handleGetOneBook } = useGlobal()

  return (
    <div className='book-item' onClick={() => handleGetOneBook(id)}>
      <div className='book-item-wrap'>
        <div className='book-item-front'>
          <div
            className='w-full h-full rounded-t-2xl bg-cover'
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
          <p className='text-sm'>Título: {title}</p>
          <p className='text-sm'>Autor(es): {authors.join(', ')}</p>
        </div>
        <div className='book-item-back'>
          <p className='text-lg font-bold'>Veja mais</p>
        </div>
      </div>
    </div>
  )
}

export default BookItem
