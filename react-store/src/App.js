import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Navbar />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
      <Routes>
        <Route exact path="/" component={<HomeScreen/>} />
        <Route exact path="/product/:id/" component={<ProductScreen/>} />
        <Route exact path="/cart" component={<CartScreen/>} />

      </Routes>
      </main>
    </Router>
  
  );
}

export default App;
