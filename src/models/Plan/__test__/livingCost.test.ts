import { Plan } from '..'

describe('get basic plan', () => {
  const basic = new Plan({
    baseAmount: 1000000,
    targetAmount: 100000000,
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    annualReserveFund: 600000,
  })
  test('living cost', () => {
    expect(basic.getAnnualLivingCost).toBe(4000000)
    expect(basic.getMonthlyLivingCost).toBe(333333)
    expect(basic.getDailyLivingCost).toBe(10958)
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
})
