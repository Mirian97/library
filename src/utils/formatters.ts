export const removeHtmlTags = (children: React.ReactNode) =>
  children!
    .toString()
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&nbsp;/gi, ' ')

export const formatDate = (day: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }
  const dateFormatted = new Date(day).toLocaleDateString('pt-br', options)
  return dateFormatted
}

export const formatBRLMoney = (value: number) =>
  value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
