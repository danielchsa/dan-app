import React from 'react';
import './App.css';

import Results from './components/Results';
import Home from './components/Home';
import ProductDetail from './components/Detail';

import { Route } from 'wouter';
import {ProductContextProvider} from './context/ProductContex';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
 
  return (
    <>
    <NavBar />
    <div className="App">
      <div className="App-content">
        <ProductContextProvider>
        <Route path='/' component={Home} />
        <Route path='/category/:keyword' component={Results} />
        <Route path='/product/:id' component={ProductDetail} />
        </ProductContextProvider>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
