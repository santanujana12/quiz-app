import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import QuestionComponent from './components/QuestionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Quiz App</h1>
     <QuestionComponent/>
    </>
  )
}

export default App;
