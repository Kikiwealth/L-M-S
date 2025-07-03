import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className='bg-blue-600'>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App