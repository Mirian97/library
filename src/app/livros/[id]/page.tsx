import DetailItem from '@/components/DetailItem'
import Title from '@/components/Title'
import IBookItem from '@/interfaces/IBookItem'
import IDetailBook from '@/interfaces/IDetailBook'
import { getOneBook } from '@/services/book'
import { formatBRLMoney, formatDate, removeHtmlTags } from '@/utils/formatters'
import { messageError } from '@/utils/toast'
import { ChevronLeftCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const handleGetOneBook = async (bookId: string) => {
  try {
    const response = await getOneBook(bookId)
    return response
  } catch (error) {
    messageError('Não foi possível carregar os dados do livros')
  }
}

const DetailBook = async ({ params: { id } }: IDetailBook) => {
  const book: IBookItem = await handleGetOneBook(id)
  const {
    volumeInfo: {
      title,
      publishedDate,
      publisher,
      description,
      authors,
      imageLinks: { thumbnail }
    },
    saleInfo: {
      saleability,
      retailPrice: { amount }
    }
  } = book
  const forSale = saleability === 'FOR_SALE' ? 'Sim' : 'Não'
  const detailList = [
    { id: 0, name: 'Descrição', description: removeHtmlTags(description) },
    {
      id: 1,
      name: 'Data de publicação',
      description: formatDate(publishedDate)
    },
    { id: 2, name: 'Editora', description: publisher },
    {
      id: 3,
      name: 'Autores',
      description: authors.join(', ')
    },
    {
      id: 4,
      name: 'Á venda',
      description: forSale
    }
  ]

  return (
    <div className='pt-4 relative'>
      <Link href='/livros'>
        <ChevronLeftCircle color='#468189' className='absolute top-3 z-[1]' size={36} />
      </Link>
      <Title className='mb-4 mx-9'>{title}</Title>
      <div className='grid grid-rows-[auto_1fr] gap-4 sm:grid-cols-[auto_1fr]'>
        <Image
          src={thumbnail}
          width={250}
          height={500}
          alt='Imagem da capa do livro'
          className='m-auto sm:m-0'
        />
        <div className='flex flex-col gap-2'>
          {detailList.map((item) => (
            <DetailItem key={item.id} {...item} />
          ))}
          {amount ? <DetailItem name='Preço' description={formatBRLMoney(amount)} /> : ''}
        </div>
      </div>
    </div>
  )
}

export default DetailBook
