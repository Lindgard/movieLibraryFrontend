import './App.css'
import Button from './components/common/Button'
import TextInput from './components/common/TextInput';
import Login from './components/Login/Login';

function App() {

  const handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <Button onClick={handleClick}>Click me</Button>
      <br />
      <TextInput label="Enter text" type="text" placeholder='Enter text here' />
      <br />
      <Login />
    </>
  )
}

export default App
