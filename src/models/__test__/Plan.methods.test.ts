import { Plan } from '../Plan'

describe('basic plan', () => {
  const basic = new Plan({
    annualLivingCost: 4000000,
    annualInterestRate: '0.04',
    annualReserveFund: 240000,
    isPublished: true,
    createdAt: '2021-05-20T00:00:00+09:00',
    updatedAt: '2021-05-20T00:00:00+09:00',
  })
  test('calc fire years', () => {
    const res = basic.calcFireYears(10000000, 100000)
    expect(res).toBe(25)
  })
  test('calc fire months', () => {
    const res = basic.calcFireMonths(10000000, 100000)
    expect(res).toBe(293)
  })
  test('calc fire days', () => {
    const res = basic.calcFireDays(10000000, 100000)
    expect(res).toBe(8898)
  })
})
