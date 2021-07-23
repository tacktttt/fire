import { BigNumber } from 'bignumber.js'
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
  private annualLivingCost: number
  private annualInterestRate: string
  private monthlyReserveFund: number

  // bool
  private isPublished = false

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

  // getter
  get getAnnualLivingCost() {
    return Math.floor(this.annualLivingCost)
  }

  get getMonthlyLivingCost() {
    return Math.floor(new BigNumber(this.annualLivingCost).div(12).toNumber())
  }

  get getDailyLivingCost() {
    return Math.floor(new BigNumber(this.annualLivingCost).div(365).toNumber())
  }

  get getAnnualInterestRate() {
    return this.annualInterestRate
  }

  get getMonthlyInterestRate() {
    return new BigNumber(this.annualInterestRate).div(12).toString()
  }

  get getDailyInterestRate() {
    return new BigNumber(this.annualInterestRate).div(365).toString()
  }

  get getMonthlyReserveFund() {
    return this.monthlyReserveFund
  }

  get getIsPublished() {
    return this.isPublished
  }

  // setter
  set setIsPublished(isPublished: boolean) {
    this.isPublished = isPublished
  }
}
