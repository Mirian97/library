const formatString = (text: string, maxLength?: number) => {
  if (maxLength && text.length >= maxLength) {
    return `${text.slice(0, maxLength)}...`
  }
  return text
}

export default formatString
