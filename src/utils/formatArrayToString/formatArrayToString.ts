const formatArrayToString = (array: string[], maxLength?: number) => {
  const string = array.join(', ')
  if (maxLength && string.length >= maxLength) {
    return `${string.slice(0, maxLength)}...`
  }
  return string
}

export default formatArrayToString
