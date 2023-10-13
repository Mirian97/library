import IBookItem from '@/interfaces/IBookItem'
import formatArrayToString from '@/utils/formatArrayToString/formatArrayToString'
import formatString from '@/utils/formatString/formatString'
import getBookImage from '@/utils/getBookImage/getBookImage'
import Link from 'next/link'
import { memo } from 'react'

const BookItem = ({ id, volumeInfo }: IBookItem) => {
  const { title, authors, imageLinks } = volumeInfo
  const bookImage = getBookImage(imageLinks)
  return (
    <Link href={`livros/${id}`} className='book-item'>
      <div className='book-item-wrap'>
        <div className='book-item-front'>
          <div
            className='w-full h-full rounded-t-2xl bg-cover'
            style={{ backgroundImage: `url(${bookImage})` }}
          />
          <div className='py-2'>
            {title && <p className='text-sm'>Título: {formatString(title, 35)}</p>}
            {authors && (
              <p className='text-sm'>Autor(es): {formatArrayToString(authors, 35)}</p>
            )}
          </div>
        </div>
        <div className='book-item-back'>
          <p className='text-lg font-bold'>Veja mais</p>
        </div>
      </div>
    </Link>
  )
}

export default memo(BookItem)
