import './App.css'
import Button from './components/common/Button'
import TextInput from './components/common/TextInput';

function App() {

  const handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <Button onClick={handleClick}>Click me</Button>
      <TextInput label="Enter text" type="text" placeholder='Enter text here' />
    </>
  )
}

export default App
