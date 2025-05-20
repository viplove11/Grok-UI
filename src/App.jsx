import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import QueryComponent from './Component/QueryComponent/QueryComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = () => {
  return (
    <div className='main-app'>
      <div>
      <Navbar/>
      </div>
      {/* container */}
      <div className="container">
        <QueryComponent></QueryComponent>
      </div>
      
    </div>
  )
}

export default App
