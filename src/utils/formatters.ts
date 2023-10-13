export const formatArrayToString = (array: string[], maxLength?: number) => {
  const string = array.join(', ')
  if (maxLength && string.length >= maxLength) {
    return `${string.slice(0, maxLength)}...`
  }
  return string
}

export const formatString = (text: string, maxLength?: number) => {
  if (maxLength && text.length >= maxLength) {
    return `${text.slice(0, maxLength)}...`
  }
  return text
}
