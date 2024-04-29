export const formatPrice = (price?: number | string) => {
  const numberPrice = Number(price)
  if (isNaN(numberPrice)) return undefined

  return numberPrice.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  })
}
