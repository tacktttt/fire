export const convertToCurrencyFormat = (value: number) =>
  value.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  })
