import { toast } from 'react-toastify'

export const messageSuccess = (messageContent: string) =>
  toast.success(messageContent, {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      borderRadius: '16px'
    }
  })

export const messageError = (messageContent: string) =>
  toast.error(messageContent, {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      borderRadius: '16px'
    }
  })
