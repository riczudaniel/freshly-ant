import './App.css'
import "./styles/Fonts.css"
import Header from './components/Header'
import TableFood from './components/TableFood'
import ButtonGroup from './components/ButtonGroup'
import InputGroup from './components/InputGroup'
import { useState } from 'react'



function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section className='left-section'>
          <ButtonGroup className="buttonGroup"></ButtonGroup>
          <TableFood></TableFood>
        </section>
        <section className='right-section'>
          <p>Track a new product</p>
          <InputGroup></InputGroup>
        </section>
        
      
      </main>
    </>
  )
}

export default App
