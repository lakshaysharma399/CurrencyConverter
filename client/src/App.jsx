import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)

  return (
    <>
      <h1 className='font-size-2xl bg-slate-900'>rfrf</h1>
    </>
  )
}

export default App
