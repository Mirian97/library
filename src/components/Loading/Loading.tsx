import Image, { ImageProps } from 'next/image'

interface ILoading extends Omit<ImageProps, 'src' | 'alt'> {}

const Loading = (props: ILoading) => (
  <Image src='/svg/loading.svg' alt='Carregando...' width={80} height={80} {...props} />
)

export default Loading
