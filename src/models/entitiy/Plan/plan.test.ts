import { Plan } from '.'

describe('get basic plan', () => {
  const plan = new Plan({
    baseAmount: 0,
    monthlyLivingCost: 150000,
    monthlyReserveFund: 30000,
    interestRate: '0.1',
  })

  test('targetAmount', () => {
    expect(plan.targetAmount).toBe(18000000)
  })

  test('numberOfMonthsToReachTheTargetAmount', () => {
    expect(plan.numberOfMonthsToReachTheTargetAmount).toBe(215)
  })
})
