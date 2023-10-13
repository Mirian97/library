const removeHtmlTags = (children: React.ReactNode): string | undefined => {
  if (!children) return
  return children!
    .toString()
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&nbsp;/gi, ' ')
}

export default removeHtmlTags
