import { BigNumber } from 'bignumber.js'

export const toBN = (value: number | string): BigNumber => {
  return new BigNumber(value)
}
