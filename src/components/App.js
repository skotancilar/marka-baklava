import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import ItemList from './ItemList';
import ProductPage from './ProductPage';
import WhatsApp from './WhatsApp';
import ScrollToTop from './ScroollToTop';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <ScrollToTop>
              <Route path="/" exact component={Home} />
              <Route path="/baklavalar" exact component={ItemList} />
              <Route path="/baklavalar/:id" exact component={ProductPage} />
              <Route path="/hakkimizda" exact component={AboutUs} />
            </ScrollToTop>
          </Switch>
          <WhatsApp src={process.env.PUBLIC_URL + '/img/whatsapp.png'} alt="WhatsApp logo" />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
