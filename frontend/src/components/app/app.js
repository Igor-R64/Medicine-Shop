import React, { useState, useEffect } from 'react';
import CardProduct from '../card/card.js';
import HomePage from '../home/home.js';
import MapBasics from '../contacts/contacts.js';
import Navigation from '../navigation';
import CartGoods from '../cart/cart.js';
import Example from '../mainmenu';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


const Background = {
  backgroundColor: "#DCDCDC"
 }
function App () {

  const [count, _setCount] = useState(0);

  const setCount = () => {
    _setCount(count + 1)
  }

  const [goods, orderGoods]= useState([]);


        return (
          <Router>
<div style={Background}>
      <Row>
        <Col sm="12">
        <Example/>
        </Col>
      </Row>
      <Container>
      <Row>
        <Col xs="2">
       <Navigation
       count={count}
       setCount={setCount}/>
        </Col>
    <Col sm="10" className="d-flex flex-wrap justify-content-around">
     
     <Route path='/products'> 
     <CardProduct
     setCount={setCount}/>
     </Route>
     <Route path='/' exact component={HomePage}/>
     <Route path='/contacts' component={MapBasics}/>
     <Route path='/cart'>
      <CartGoods
      goodsForOrder={goods}/>
      </Route>
    </Col>
      </Row>
    </Container>
    </div>
          </Router>
        );
}

export default App;