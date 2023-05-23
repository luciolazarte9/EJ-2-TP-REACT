import './App.css'

function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>
}

function App() {
  return (
    < >
    <div>
      <Saludo nombre = "My friend"/>
    </div>
    </>
  )
}

export default App
