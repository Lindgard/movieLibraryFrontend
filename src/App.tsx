import './App.css'
import Button from './components/common/Button'

function App() {

  return (
    <>
      <h1>Hello, world!</h1>
      <Button onClick={() => alert("Button clicked!")}>Click me</Button>
    </>
  )
}

export default App
