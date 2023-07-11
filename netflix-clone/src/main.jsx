import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Header/Header'
import './App.scss'
import Home from './components/Home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/'/>
    </Routes>
  </Router>



  
)
