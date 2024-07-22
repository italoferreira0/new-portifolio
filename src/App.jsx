import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao';
import Navbar from './componentes/Navbar/Navbar';
import Projetos from './componentes/Projetos/Projetos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Apresentacao/>
        <Projetos/>
      </div>


    </>
  )
}

export default App
