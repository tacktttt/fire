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
  test('interest rate', () => {
    expect(basic.getAnnualInterestRate).toBe('0.04')
    expect(basic.getMonthlyInterestRate).toBe('0.00333333333333333333')
    expect(basic.getDailyInterestRate).toBe('0.00010958904109589041')
  })
  test('living cost', () => {
    expect(basic.getAnnualLivingCost).toBe(4000000)
    expect(basic.getMonthlyLivingCost).toBe(333333)
    expect(basic.getDailyLivingCost).toBe(10958)
  })
  test('reserve fund', () => {
    expect(basic.getAnnualReserveFund).toBe(600000)
    expect(basic.getMonthlyReserveFund).toBe(50000)
    expect(basic.getDailyReserveFund).toBe(1643)
  })
})
