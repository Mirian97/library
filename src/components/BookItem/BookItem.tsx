import IBookItem from '@/interfaces/IBookItem'
import formatArrayToString from '@/utils/formatArrayToString/formatArrayToString'
import formatString from '@/utils/formatString/formatString'
import getBookImage from '@/utils/getBookImage/getBookImage'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { memo } from 'react'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const BookItem = ({ id, volumeInfo }: Pick<IBookItem, 'id' | 'volumeInfo'>) => {
  const { title, authors, imageLinks } = volumeInfo
  const bookImage = getBookImage(imageLinks)
  const router = useRouter()
  const navigateToBookItem = () => router.push(`livros/${id}`)

  return (
    <motion.div
      variants={item}
      onClick={navigateToBookItem}
      className='book-item'
      data-testid='book-item'
    >
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
    </motion.div>
  )
}

export default memo(BookItem)
