const removeHtmlTags = (children: React.ReactNode) => {
  if (!children) return
  return children!
    .toString()
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&nbsp;/gi, ' ')
}

export default removeHtmlTags
