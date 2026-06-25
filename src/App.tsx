import './App.css'
import Button from './components/common/Button'

function App() {

  const handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <Button onClick={handleClick}>Click me</Button>
    </>
  )
}

export default App
