import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import ListaColaboradores from './components/ListaColaboradores'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [palabraBusqueda, setPalabraBusqueda] = useState('')

  return (
    <div>
        <Buscador palabraBusqueda={palabraBusqueda} setPalabraBusqueda={setPalabraBusqueda} />
        <Formulario setColaboradores = {setColaboradores} colaboradores={colaboradores} />
        <ListaColaboradores colaboradores={colaboradores} palabraBusqueda={palabraBusqueda}/>
      
    </div>
  )
}

export default App
