import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Store from './components/Store';
import Navbar from './components/Navbar';
import { ShoppingContext } from './context/ContextProvider';
import Footer from './components/Footer';

function App() {

  return(
  <ShoppingContext>
  <Navbar />
  <Container>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/store' element={<Store />}/>
    </Routes>
  </Container>
  <Footer />
  </ShoppingContext>
  )
  }

export default App
