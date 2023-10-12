
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/inicio'
import Proyectos from './components/proyectos'
import SobreMi from './components/sobreMi'
import Contacto from './components/contacto'
import NavBar from './components/navBar'
import './App.css'

function App() {
  

  return (
    <>
      <NavBar/>
      
      
      
      
      
      <Routes>
        <Route path='/Portfolio-de-Cristian/' element={<Inicio/>}/>
        <Route path='/Portfolio-de-Cristian/sobreMi' element={<SobreMi/>}/>
        <Route path='/Portfolio-de-Cristian/proyectos' element={<Proyectos/>}/>
        <Route path='/Portfolio-de-Cristian/contacto' element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App