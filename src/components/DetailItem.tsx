interface IDetailItem {
  name: string
  description: string
}

const DetailItem = ({ name, description }: IDetailItem) => {
  return (
    <div>
      <span className='text-primary-800 font-bold'>{name}: </span>
      <span className='text-gray-600'>{description}</span>
    </div>
  )
}

export default DetailItem
