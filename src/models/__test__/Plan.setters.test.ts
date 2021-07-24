import { Plan } from '../Plan'

describe('basic plan', () => {
  const basic = new Plan({
    baseAmount: 1000000,
    targetAmount: 100000000,
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    annualReserveFund: 600000,
    isPublished: true,
    createdAt: '2021-05-20T00:00:00+09:00',
    updatedAt: '2021-05-20T00:00:00+09:00',
  })

  describe('interest rate', () => {
    test('setAnnualInterestRate', () => {
      basic.setAnnualInterestRate = '0.01'
      expect(basic.getAnnualInterestRate).toBe('0.01')
      expect(basic.getMonthlyInterestRate).toBe('0.00083333333333333333')
      expect(basic.getDailyInterestRate).toBe('0.0000273972602739726')
    })
    test('setMonthlyInterestRate', () => {
      basic.setMonthlyInterestRate = '0.01'
      expect(basic.getAnnualInterestRate).toBe('0.12')
      expect(basic.getMonthlyInterestRate).toBe('0.01')
      expect(basic.getDailyInterestRate).toBe('0.00032876712328767123')
    })
    test('setDailyInterestRate', () => {
      basic.setDailyInterestRate = '0.0001'
      expect(basic.getAnnualInterestRate).toBe('0.0365')
      expect(basic.getMonthlyInterestRate).toBe('0.00304166666666666667')
      expect(basic.getDailyInterestRate).toBe('0.0001')
    })
  })

  describe('living cost', () => {
    test('setAnnualLivingCost', () => {
      basic.setAnnualLivingCost = 6000000
      expect(basic.getAnnualLivingCost).toBe(6000000)
      expect(basic.getMonthlyLivingCost).toBe(500000)
      expect(basic.getDailyLivingCost).toBe(16438)
    })
    test('setMonthlyLivingCost', () => {
      basic.setMonthlyLivingCost = 200000
      expect(basic.getAnnualLivingCost).toBe(2400000)
      expect(basic.getMonthlyLivingCost).toBe(200000)
      expect(basic.getDailyLivingCost).toBe(6575)
    })
    test('setDailyLivingCost', () => {
      basic.setDailyLivingCost = 3000
      expect(basic.getAnnualLivingCost).toBe(1095000)
      expect(basic.getMonthlyLivingCost).toBe(91250)
      expect(basic.getDailyLivingCost).toBe(3000)
    })
  })

  describe('reserve fund', () => {
    test('setAnnualReserveFund', () => {
      basic.setAnnualReserveFund = 200000
      expect(basic.getAnnualReserveFund).toBe(200000)
      expect(basic.getMonthlyReserveFund).toBe(16666)
      expect(basic.getDailyReserveFund).toBe(547)
    })
    test('setMonthlyReserveFund', () => {
      basic.setMonthlyReserveFund = 50000
      expect(basic.getAnnualReserveFund).toBe(600000)
      expect(basic.getMonthlyReserveFund).toBe(50000)
      expect(basic.getDailyReserveFund).toBe(1643)
    })
    test('setDailyLivingCost', () => {
      basic.setDailyReserveFund = 6000
      expect(basic.getAnnualReserveFund).toBe(2190000)
      expect(basic.getMonthlyReserveFund).toBe(182500)
      expect(basic.getDailyReserveFund).toBe(6000)
    })
  })
})
