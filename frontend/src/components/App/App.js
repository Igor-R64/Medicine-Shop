import React, { useState } from 'react';
import CardProduct from '../CardProduct/CardProduct.js';
import HomePage from '../HomePage/HomePage.js';
import Contacts from '../Contacts/Contacts.js';
import Navigation from '../Navigation';
import BasketGoods from '../BasketGoods/BasketGoods.js';
import MainMenu from '../MainMenu';
import OrderPage from '../OrderPage/Orderpage.js';
import Footer from '../Footer/Footer.js';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// import "./App.css";

function App() {

  const [goodsForOrder, _addGoodToBasket] = useState([]);

  const addGoodToBasket = (id) => { _addGoodToBasket([...goodsForOrder, id]); };
  const clearBasket = () => { _addGoodToBasket([]); };


  return (
    <Router>
      <div className="wrapper">
        <Row>
          <Col sm="12">
            <MainMenu />
          </Col>
        </Row>
        <Row>
          <Navigation
            count={goodsForOrder.length} />
        </Row>
        <Container>
          <Row>
            <Col sm="12" className="d-flex flex-wrap justify-content-around">
              <Route path='/products'>
                <CardProduct
                  addGoodToBasket={addGoodToBasket} />
              </Route>
              <Route path='/' exact component={HomePage} />
              <Route path='/contacts' component={Contacts} />
              <Route path='/order' component={OrderPage}
                count={goodsForOrder} />
              <Route path='/basket'>
                <BasketGoods
                  clearBasket={clearBasket}
                  goodsForOrder={goodsForOrder} />
              </Route>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;