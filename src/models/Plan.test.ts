import { jstDate } from '../lib/date'

import { Plan } from './Plan'

describe('basic plan', () => {
  const basic: Plan = {
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    monthlyReserveFund: 20000,
    createdAt: jstDate(new Date('2021-05-20')),
    updatedAt: jstDate(new Date('2021-05-20')),
    isPublished: false,
  }
  test('success', () => {
    const success = new Plan({
      annualLivingCost: 4000000,
      annualInterestRate: '0.04',
      monthlyReserveFund: 20000,
      createdAt: '2021-05-20T09:00:00+09:00',
      updatedAt: '2021-05-20T09:00:00+09:00',
    })
    expect(success).toBe(basic)
  })
})
