import { toBN } from '../../lib/bigNumber'

export type IPlan = {
  baseAmount: number
  monthlyLivingCost: number
  monthlyReserveFund: number
  interestRate: string
}

export class Plan {
  private baseAmount: number
  private monthlyLivingCost: number
  private monthlyReserveFund: number
  private monthlyInterestRate: string

  constructor(obj: IPlan) {
    this.baseAmount = obj.baseAmount
    this.monthlyLivingCost = obj.monthlyLivingCost
    this.monthlyReserveFund = obj.monthlyReserveFund
    this.monthlyInterestRate = toBN(obj.interestRate).div(12).toString()
  }

  get targetAmount(): number {
    const x = toBN(this.monthlyLivingCost)
    const y = toBN(this.monthlyInterestRate)
    return Math.floor(x.div(y).toNumber())
  }

  get numberOfMonthsToReachTheTargetAmount() {
    const remainingAmount = this.targetAmount - this.baseAmount
    const fvr = toBN(remainingAmount).times(toBN(this.monthlyInterestRate))
    const pmt = toBN(this.monthlyReserveFund)

    const m = fvr.div(pmt).plus(1).toNumber()
    const a = toBN(this.monthlyInterestRate).plus(1).toNumber()

    const n = Math.floor(Math.log(m) / Math.log(a))

    return n
  }
}
