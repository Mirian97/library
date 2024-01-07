import { Variants } from 'framer-motion'

export const DETAIL_BOOK_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: +30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

export const DETAIL_BOOK_MOTION_PROPS = {
  initial: 'hidden',
  animate: 'visible',
  variants: DETAIL_BOOK_VARIANTS
}
