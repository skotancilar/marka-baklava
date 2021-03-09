import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import ItemList from './ItemList';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/baklavalar" exact component={ItemList} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
{/* adress ve telefon
          marka baklava t]mhaklari saklidir
          shopier
          logo
           */}

export default App;
