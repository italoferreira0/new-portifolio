import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>New Portifolio</h1>
        <Apresentacao/>
      </div>

    </>
  )
}

export default App
