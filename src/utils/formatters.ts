export const removeHtmlTags = (children: React.ReactNode) => {
  if (!children) return
  return children!
    .toString()
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&nbsp;/gi, ' ')
}

export const formatDate = (day: string) => {
  if (!day) return
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }
  const dateFormatted = new Date(day).toLocaleDateString('pt-br', options)
  return dateFormatted
}

export const formatBRLMoney = (value: number) => {
  if (!value) return
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

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
