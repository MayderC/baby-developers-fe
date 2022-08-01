import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './views/Landing/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>

    </div>
  )
}

export default App
