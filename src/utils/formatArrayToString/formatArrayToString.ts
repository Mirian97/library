const formatArrayToString = (array: string[], maxLength?: number) => {
  const string = array.join(', ')
  if (maxLength && maxLength > 0 && string.length >= maxLength) {
    return `${string.slice(0, maxLength)}...`
  }
  return string
}

export default formatArrayToString
