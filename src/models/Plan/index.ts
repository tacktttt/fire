import BigNumber from 'bignumber.js'

export type IPlan = {
  baseAmount: number
  monthlyLivingCost: number
  monthlyReserveFund: number
  interestRate: string
}

export class Plan {
  private baseAmount: BigNumber
  private monthlyLivingCost: BigNumber
  private monthlyReserveFund: BigNumber
  private monthlyInterestRate: BigNumber

  constructor(obj: IPlan) {
    this.baseAmount = new BigNumber(obj.baseAmount)
    this.monthlyLivingCost = new BigNumber(obj.monthlyLivingCost)
    this.monthlyReserveFund = new BigNumber(obj.monthlyReserveFund)
    this.monthlyInterestRate = new BigNumber(obj.interestRate).div(12)
  }

  get targetAmount(): number {
    const x = this.monthlyLivingCost
    const y = this.monthlyInterestRate
    return Math.floor(x.div(y).toNumber())
  }

  get numberOfMonthsToReachTheTargetAmount(): number {
    const targetAmount = new BigNumber(this.targetAmount)
    const remainingAmount = targetAmount.minus(this.baseAmount)
    const fvr = remainingAmount.times(this.monthlyInterestRate)
    const pmt = this.monthlyReserveFund

    const m = fvr.div(pmt).plus(1).toNumber()
    const a = this.monthlyInterestRate.plus(1).toNumber()

    const n = Math.floor(Math.log(m) / Math.log(a))

    return n
  }
}
