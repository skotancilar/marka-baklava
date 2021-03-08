import React from 'react'
import AboutUs from './AboutUs';
import './App.scss';
import Header from './Header';
import ItemList from './ItemList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ItemList />
      <AboutUs />
    </div>
  );
}

export default App;
