const BookItem = () => {
  const book = {
    image:
      'https://books.google.com/books/publisher/content?id=W746EAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70FWBvGZ1RKTf0i-GgZ1bLlgqfjjMnEqBKN64S-KGAXzp5YxlueAwDFCI5PGfZaDim7cnZ7PGs6I-Y1f0_bs9JDcWJ9SvzJ7wWceYMt6yVOtAfwDw7bq5LUaIcitzlyjttetbgA&source=gbs_api',
    title: 'A biblioteca de Paris',
    authors: ['Janet Skeslien Charles']
  }
  return (
    <div className='book-item'>
      <div className='book-item-wrap'>
        <div className='book-item-front'>
          <div
            className='w-full h-full rounded-t-2xl bg-cover'
            style={{ backgroundImage: `url(${book.image})` }}
          />
          <p className='text-sm'>Título: {book.title}</p>
          <p className='text-sm'> Autor(es): {book.authors}</p>
        </div>
        <div className='book-item-back'>
          <p className='text-lg font-bold'>Veja mais</p>
        </div>
      </div>
    </div>
  )
}

export default BookItem
