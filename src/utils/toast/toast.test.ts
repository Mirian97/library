import { toast } from 'react-toastify'
import { messageError, messageSuccess } from './toast'

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

describe('toast messages', () => {
  it('calls toast.success with correct arguments when messageSuccess is called', () => {
    const messageContent = 'Success message'

    messageSuccess(messageContent)

    expect(toast.success).toHaveBeenCalledWith(messageContent, expect.any(Object))
  })

  it('calls toast.error with correct arguments when messageError is called', () => {
    const messageContent = 'Error message'

    messageError(messageContent)

    expect(toast.error).toHaveBeenCalledWith(messageContent, expect.any(Object))
  })
})
