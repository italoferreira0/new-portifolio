import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apresentacao from './componentes/Apresentacao/Apresentacao';
import Navbar from './componentes/Navbar/Navbar';
import Sobre from './componentes/Sobre/Sobre';
import Projetos from './componentes/Projetos/Projetos';
import Tecnologias from './componentes/Tecnologias/Tecnologias';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Apresentacao/>
        <Sobre/>
        <Projetos/>
        <Tecnologias/>
      </div>


    </>
  )
}

export default App
