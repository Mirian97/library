const formatString = (text: string, maxLength?: number) => {
  if (maxLength && maxLength > 0 && text.length >= maxLength) {
    return `${text.slice(0, maxLength)}...`
  }
  return text
}

export default formatString
