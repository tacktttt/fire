import { Plan } from '..'

describe('get basic plan', () => {
  const basic = new Plan({
    baseAmount: 1000000,
    targetAmount: 100000000,
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    annualReserveFund: 600000,
  })
  test('interest rate', () => {
    expect(basic.getAnnualInterestRate).toBe('0.04')
    expect(basic.getMonthlyInterestRate).toBe('0.00333333333333333333')
    expect(basic.getDailyInterestRate).toBe('0.00010958904109589041')
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
})
