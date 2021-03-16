import React, { useState, useEffect } from 'react';
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
import Payment from './Payment';
import SyncLoader from "react-spinners/SyncLoader";
import Logo from './Logo';

const override = `
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      {
        loading ? (
          <div className="spinner">
            <Logo src={process.env.PUBLIC_URL + '/img/logo.svg'} />
            <SyncLoader color={'white'} css={override} loading={loading} size={30} margin={6} />
          </div>
        )

          :
          <Router>
            <div>
              <Navbar />
              <Switch>
                <ScrollToTop>
                  <Route path="/" exact component={Home} />
                  <Route path="/baklavalar" exact component={ItemList} />
                  <Route path="/baklavalar/:id" exact component={ProductPage} />
                  <Route path="/hakkimizda" exact component={AboutUs} />
                  <Route path="/odeme/:id" exact component={Payment} />
                </ScrollToTop>
              </Switch>
              <WhatsApp src={process.env.PUBLIC_URL + '/img/whatsapp.svg'} alt="WhatsApp logo" />
              <Footer />
            </div>
          </Router>
      }

    </div>
  );
}

export default App;
