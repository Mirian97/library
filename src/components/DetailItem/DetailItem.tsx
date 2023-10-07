interface IDetailItem {
  name: string
  description?: string
}

const DetailItem = ({ name, description }: IDetailItem) => (
  <div
    className={`text-justify ${!description && 'hidden'}`}
    data-testid='wrapDetailItem'
  >
    <span className='text-primary-800 font-bold'>{name}: </span>
    <span className='text-gray-600'>{description}</span>
  </div>
)

export default DetailItem
