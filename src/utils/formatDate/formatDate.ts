const formatDate = (day: string) => {
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

export default formatDate
