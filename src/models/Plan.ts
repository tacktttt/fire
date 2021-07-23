import { jstDate } from '../lib/date'

type IPlan = {
  annualLivingCost: number
  annualInterestRate: string
  monthlyReserveFund: number
  isPublished?: boolean
  createdAt?: string
  updatedAt?: string
}

export class Plan {
  // props
  public annualLivingCost: number
  public annualInterestRate: string
  public monthlyReserveFund: number

  // bool
  public isPublished = false

  // timestamp
  public createdAt: Date | null
  public updatedAt: Date | null

  constructor(obj: IPlan) {
    this.annualLivingCost = obj.annualLivingCost
    this.annualInterestRate = obj.annualInterestRate
    this.monthlyReserveFund = obj.monthlyReserveFund
    this.isPublished = !!obj.isPublished
    this.createdAt = obj.createdAt ? jstDate(new Date(obj.createdAt)) : null
    this.updatedAt = obj.updatedAt ? jstDate(new Date(obj.updatedAt)) : null
  }
}
