import React, { useState } from 'react';
import CardProduct from '../card/card.js';
import HomePage from '../home/home.js';
import MapBasics from '../contacts/contacts.js';
import Navigation from '../navigation';
import BasketGoods from '../basket/basket.js';
import Example from '../mainmenu';
import OrderPage from '../orderpage/orderpage.js';
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
              <Route path='/contacts' component={MapBasics} />
              <Route path='/order' component={OrderPage}
                count={goodsForOrder} />
              <Route path='/basket'>
                <BasketGoods goodsForOrder={goodsForOrder} />
              </Route>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;