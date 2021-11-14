import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import { Plan, IPlan } from './models/Plan'
import { JstDate } from './lib/date'

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
      <div>{`PV: ${plan.getBaseAmount}`}</div>
      <div>{`FV: ${plan.getTargetAmount}`}</div>
      <div>{`運用利回り: ${plan.getAnnualInterestRate}`}</div>
      <div>{`年間積立金額: ${plan.getAnnualReserveFund}`}</div>

      <div>結果</div>
      <div>{`FIREまでの期間 ${Math.floor(n / 12)}年${n % 12}ヶ月`}</div>
      <div>{`FIREする年月 ${d}`}</div>
      <div>{`積立総額 ${plan.getMonthlyReserveFund * n}`}</div>
    </ChakraProvider>
  )
}

export default App
