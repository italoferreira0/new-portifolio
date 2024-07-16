import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>New Portifolio</h1>
        <h2>Teste</h2>
        <button type="button" className='btn btn-dark'>Botão</button>
      </div>

    </>
  )
}

export default App
