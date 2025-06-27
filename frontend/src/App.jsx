import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/layouts/body/Body'
import Footer from './components/layouts/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Education Tutorial</h1>
      <Body/>
      <Footer/>
    </>
  )
}


export default App
