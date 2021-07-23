import { BigNumber } from 'bignumber.js'
import { JstDate } from '../lib/date'

const months = 12
const days = 365

type IPlan = {
  annualLivingCost: number
  annualInterestRate: string
  annualReserveFund: number
  isPublished: boolean
  createdAt: string
  updatedAt: string
}

export class Plan {
  // props
  private annualLivingCost: number
  private annualInterestRate: string
  private annualReserveFund: number

  // bool
  private isPublished: boolean

  // timestamp
  public createdAt: Date
  public updatedAt: Date

  constructor(obj: IPlan) {
    this.annualLivingCost = Math.floor(obj.annualLivingCost)
    this.annualInterestRate = obj.annualInterestRate
    this.annualReserveFund = Math.floor(obj.annualReserveFund)
    this.isPublished = obj.isPublished
    this.createdAt = JstDate(new Date(obj.createdAt))
    this.updatedAt = JstDate(new Date(obj.updatedAt))
  }

  // getter
  get getAnnualLivingCost() {
    return Math.floor(this.annualLivingCost)
  }

  get getMonthlyLivingCost() {
    return Math.floor(
      new BigNumber(this.annualLivingCost).div(months).toNumber()
    )
  }

  get getDailyLivingCost() {
    return Math.floor(new BigNumber(this.annualLivingCost).div(days).toNumber())
  }

  get getAnnualInterestRate() {
    return this.annualInterestRate
  }

  get getMonthlyInterestRate() {
    return new BigNumber(this.annualInterestRate).div(months).toString()
  }

  get getDailyInterestRate() {
    return new BigNumber(this.annualInterestRate).div(days).toString()
  }

  get getAnnualReserveFund() {
    return Math.floor(this.annualReserveFund)
  }

  get getMonthlyReserveFund() {
    return Math.floor(
      new BigNumber(this.annualReserveFund).div(months).toNumber()
    )
  }

  get getDailyReserveFund() {
    return Math.floor(
      new BigNumber(this.annualReserveFund).div(days).toNumber()
    )
  }

  get getIsPublished() {
    return this.isPublished
  }

  // setter
  set setAnnualLivingCost(annualLivingCost: number) {
    this.annualLivingCost = Math.floor(annualLivingCost)
  }

  set setMonthlyLivingCost(monthlyLivingCost: number) {
    const annualLivingCost = new BigNumber(monthlyLivingCost).times(months)
    this.annualLivingCost = Math.floor(annualLivingCost.toNumber())
  }

  set setDailyLivingCost(dailyLivingCost: number) {
    const annualLivingCost = new BigNumber(dailyLivingCost).times(days)
    this.annualLivingCost = Math.floor(annualLivingCost.toNumber())
  }

  set setAnnualInterestRate(annualInterestRate: string) {
    this.annualInterestRate = annualInterestRate
  }

  set setMonthlyInterestRate(monthlyInterestRate: string) {
    const annualInterestRate = new BigNumber(monthlyInterestRate).times(months)
    this.annualInterestRate = annualInterestRate.toString()
  }

  set setDailyInterestRate(dailyInterestRate: string) {
    const annualInterestRate = new BigNumber(dailyInterestRate).times(days)
    this.annualInterestRate = annualInterestRate.toString()
  }

  set setAnnualReserveFund(annualReserveFund: number) {
    this.annualReserveFund = Math.floor(annualReserveFund)
  }

  set setMonthlyReserveFund(monthlyReserveFund: number) {
    const annualReserveFund = new BigNumber(monthlyReserveFund).times(months)
    this.annualReserveFund = Math.floor(annualReserveFund.toNumber())
  }

  set setDailyReserveFund(dailyReserveFund: number) {
    const annualReserveFund = new BigNumber(dailyReserveFund).times(days)
    this.annualReserveFund = Math.floor(annualReserveFund.toNumber())
  }

  set setIsPublished(isPublished: boolean) {
    this.isPublished = isPublished
  }

  // methods
  calcFireYears(targetAmount: number, baseAmount: number) {
    const v = targetAmount - baseAmount
    const tmp1 = new BigNumber(v).div(this.getAnnualReserveFund)
    const tmp2 = tmp1.times(this.getAnnualInterestRate).plus(1)
    const rate = new BigNumber(1).plus(this.getAnnualInterestRate)
    const res = Math.log(tmp2.toNumber()) / Math.log(rate.toNumber())
    return Math.ceil(res)
  }

  calcFireMonths(targetAmount: number, baseAmount: number) {
    const v = targetAmount - baseAmount
    const tmp1 = new BigNumber(v).div(this.getMonthlyReserveFund)
    const tmp2 = tmp1.times(this.getMonthlyInterestRate).plus(1)
    const rate = new BigNumber(1).plus(this.getMonthlyInterestRate)
    const res = Math.log(tmp2.toNumber()) / Math.log(rate.toNumber())
    return Math.ceil(res)
  }

  calcFireDays(targetAmount: number, baseAmount: number) {
    const v = targetAmount - baseAmount
    const tmp1 = new BigNumber(v).div(this.getDailyReserveFund)
    const tmp2 = tmp1.times(this.getDailyInterestRate).plus(1)
    const rate = new BigNumber(1).plus(this.getDailyInterestRate)
    const res = Math.log(tmp2.toNumber()) / Math.log(rate.toNumber())
    return Math.ceil(res)
  }
}
