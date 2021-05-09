import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Products from './pages/Products'
import Home from './pages/Home'
import ParticularProduct from './pages/ParticularProduct'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route path='/products/:id' component={ParticularProduct} />
          <Route path='/cart' component={CartContainer} />
        </Switch>
      </CartProvider>
    </>
  );
}

export default App;
