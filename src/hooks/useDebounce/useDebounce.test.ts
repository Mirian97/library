import { act, renderHook, waitFor } from '@testing-library/react'
import useDebounce from './useDebounce'

describe('useDebounce', () => {
  it('debounces values', async () => {
    const { result } = renderHook(() => useDebounce('initialValue', 1000))
    expect(result.current).toBe('initialValue')

    act(() => {
      result.current = 'updatedValue'
    })

    await waitFor(() => {
      expect(result.current).toBe('updatedValue')
    })
  })

  it('set delay equal to 500ms if is not provided', async () => {
    const { result } = renderHook(() => useDebounce('initialValue'))
    expect(result.current).toBe('initialValue')

    act(() => {
      result.current = 'updatedValue'
    })

    await waitFor(() => {
      expect(result.current).toBe('updatedValue')
    })
  })
})
