import { toBN } from '../../lib/bigNumber'

export type IPlan = {
  baseAmount: number
  monthlyLivingCost: number
  monthlyReserveFund: number
  monthlyInterestRate: string
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
    this.monthlyInterestRate = obj.monthlyInterestRate
  }

  get targetAmount(): number {
    const x = toBN(this.monthlyLivingCost)
    const y = toBN(this.monthlyInterestRate)
    return Math.floor(x.div(y).toNumber())
  }
}
