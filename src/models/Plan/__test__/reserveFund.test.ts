import { Plan } from '..'

describe('get basic plan', () => {
  const basic = new Plan({
    baseAmount: 1000000,
    targetAmount: 100000000,
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    annualReserveFund: 600000,
  })
  test('reserve fund', () => {
    expect(basic.getAnnualReserveFund).toBe(600000)
    expect(basic.getMonthlyReserveFund).toBe(50000)
    expect(basic.getDailyReserveFund).toBe(1643)
  })
})

describe('update basic plan', () => {
  const basic = new Plan({
    baseAmount: 1000000,
    targetAmount: 100000000,
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    annualReserveFund: 600000,
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
