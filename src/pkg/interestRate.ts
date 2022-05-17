import { BigNumber } from 'bignumber.js'

export const fixedPercentInterest = (interestRate: string) => {
  const x = new BigNumber(interestRate)
  const y = x.times(100)
  return y.toFixed(1)
}
