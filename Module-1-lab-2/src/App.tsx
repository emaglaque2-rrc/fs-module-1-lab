import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import { Directory } from './components/directory/Directory'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Directory/>
      </main>
      <Footer/>
    </>
  )
}

export default App
