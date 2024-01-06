const formatBRLMoney = (value: number) => {
  if (!value) return
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

export default formatBRLMoney
