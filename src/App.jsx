import './App.css'
import Mensaje from './components/Mensaje'

function App() {
  const mensaje ="My Friend!"

  return (
    <>
      <Mensaje mensaje = {mensaje}></Mensaje>
    </>
  )
}

export default App
