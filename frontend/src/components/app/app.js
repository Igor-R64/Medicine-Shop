import React, { useState } from 'react';
import CardProduct from '../CardProduct/CardProduct.js';
import HomePage from '../HomePage/HomePage.js';
import Contacts from '../Contacts/Contacts.js';
import Navigation from '../Navigation';
import BasketGoods from '../BasketGoods/BasketGoods.js';
import Example from '../MainMenu';
import OrderPage from '../OrderPage/OrderPage.js';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


const Background = {
  backgroundColor: "#DCDCDC"
}
function App() {

  const [goodsForOrder, _addGoodToBasket] = useState([]);

  const addGoodToBasket = (id) => { _addGoodToBasket([...goodsForOrder, id]); };
  const clearBasket = () => { _addGoodToBasket([ ]); };


  return (
    <Router>
      <div style={Background}>
        <Row>
          <Col sm="12">
            <Example />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs="2">
              <Navigation
                count={goodsForOrder.length}
              />
            </Col>
            <Col sm="10" className="d-flex flex-wrap justify-content-around">

              <Route path='/products'>
                <CardProduct
                  addGoodToBasket={addGoodToBasket}
                />
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
    </Router>
  );
}

export default App;