import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { Plan, IPlan } from './models/Plan'
import { JstDate, formatToMonth } from './lib/date'
import { convertToCurrencyFormat } from './lib/currency'
import { calcFixedPercentInterest } from './lib/interestRate'

const obj: IPlan = {
  baseAmount: 1000000,
  targetAmount: 20000000,
  annualLivingCost: 800000,
  annualInterestRate: '0.05',
  annualReserveFund: 600000,
}

const App = () => {
  const plan = new Plan(obj)
  const d = JstDate(new Date())
  const n = plan.numberOfMonth
  d.setMonth(d.getMonth() + n)

  return (
    <ChakraProvider>
      <div>入力</div>
      <div>{`PV: ${convertToCurrencyFormat(plan.getBaseAmount)}`}</div>
      <div>{`FV: ${convertToCurrencyFormat(plan.getTargetAmount)}`}</div>
      <div>{`運用利回り: ${calcFixedPercentInterest(
        plan.getAnnualInterestRate
      )}%`}</div>
      <div>{`年間積立金額: ${convertToCurrencyFormat(
        plan.getAnnualReserveFund
      )}`}</div>
      <br />
      <div>結果</div>
      <div>{`FIREまでの期間 ${Math.floor(n / 12)}年${n % 12}ヶ月`}</div>
      <div>{`FIREする年月 ${formatToMonth(d)}`}</div>
      <div>{`積立総額 ${convertToCurrencyFormat(
        plan.getMonthlyReserveFund * n
      )}`}</div>
    </ChakraProvider>
  )
}

export default App
