import { BigNumber } from 'bignumber.js'

const months = 12
const days = 365

export type IPlan = {
  baseAmount: number
  targetAmount: number
  annualLivingCost: number
  annualInterestRate: string
  annualReserveFund: number
}

export class Plan {
  private baseAmount: number
  private targetAmount: number
  private annualLivingCost: number
  private annualInterestRate: string
  private annualReserveFund: number

  constructor(obj: IPlan) {
    this.baseAmount = Math.floor(obj.baseAmount)
    this.targetAmount = Math.floor(obj.targetAmount)
    this.annualLivingCost = Math.floor(obj.annualLivingCost)
    this.annualInterestRate = obj.annualInterestRate
    this.annualReserveFund = Math.floor(obj.annualReserveFund)
  }

  // getter
  get getBaseAmount() {
    return Math.floor(this.baseAmount)
  }

  get getTargetAmount() {
    return Math.floor(this.targetAmount)
  }

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

  get numberOfMonth() {
    const r = new BigNumber(this.getMonthlyInterestRate)
    const r1 = r.plus(1)
    let pv = new BigNumber(this.baseAmount)
    const tv = new BigNumber(this.getMonthlyReserveFund)
    const fv = new BigNumber(this.targetAmount)

    let n = 0
    while (pv.toNumber() < fv.toNumber()) {
      pv = pv.plus(tv)
      pv = pv.times(r1)
      console.log(pv.toNumber())
      n++
    }
    return n
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
}
