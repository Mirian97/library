/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import Button from '@/components/Button/Button'
import DetailItem from '@/components/DetailItem/DetailItem'
import Loading from '@/components/Loading/Loading'
import Title from '@/components/Title/Title'
import { defaultBookItem } from '@/constants/book'
import IDetailBook from '@/interfaces/IDetailBook'
import { getOneBook } from '@/services/book'
import {
  formatArrayToString,
  formatBRLMoney,
  formatDate,
  removeHtmlTags
} from '@/utils/formatters'
import { getBookImage } from '@/utils/functions'
import { messageError } from '@/utils/toast'
import { ChevronLeftCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const DetailBook = ({ params: { id } }: IDetailBook) => {
  const [book, setBook] = useState(defaultBookItem)
  const [isLoadingBook, setIsLoadingBook] = useState(true)
  const router = useRouter()
  const navigateToHome = () => router.back()
  const {
    volumeInfo: { title, publishedDate, publisher, description, authors, imageLinks },
    saleInfo: { saleability, retailPrice }
  } = book
  const bookImage = getBookImage(imageLinks)
  const forSale = saleability === 'FOR_SALE' ? 'Sim' : 'Não'
  const detailList = [
    { id: 0, name: 'Descrição', description: removeHtmlTags(description) },
    { id: 1, name: 'Data de publicação', description: formatDate(publishedDate) },
    { id: 2, name: 'Editora', description: publisher },
    {
      id: 3,
      name: 'Autor(es)',
      description: authors && formatArrayToString(authors)
    },
    { id: 4, name: 'Á venda', description: forSale },
    { id: 5, name: 'Preço', description: formatBRLMoney(retailPrice?.amount) }
  ]

  useEffect(() => {
    const handleGetOneBook = async (bookId: string) => {
      setIsLoadingBook(true)
      try {
        const response = await getOneBook(bookId)
        setBook(response)
      } catch (error) {
        messageError('Não foi possível carregar os dados do livro')
      } finally {
        setIsLoadingBook(false)
      }
    }
    handleGetOneBook(id)
  }, [])

  return (
    <div className='pt-5 pb-10 relative'>
      <Button variant='plain' className='absolute top-1 z-[1]' onClick={navigateToHome}>
        <ChevronLeftCircle color='#468189' size={36} />
      </Button>
      <Title className='mb-4 mx-11'>{title}</Title>
      {isLoadingBook ? (
        <Loading className='mt-16 mx-auto' />
      ) : (
        <div className='grid grid-rows-[auto_1fr] gap-4 sm:grid-cols-[auto_1fr]'>
          <img
            src={bookImage}
            alt='Imagem da capa do livro'
            className='m-auto sm:m-0 w-[250px] max-h-[380px] rounded-xl drop-shadow-xl'
          />
          <div className='flex flex-col gap-2'>
            {detailList.map((item) => (
              <DetailItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailBook
