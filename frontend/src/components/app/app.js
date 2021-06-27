import React, {Component} from 'react';
import CardProduct from '../card/card.js';
import HomePage from '../home/home.js';
import MapBasics from '../contacts/contacts.js';
import Navigation from '../navigation';
import Example from '../mainmenu';
import { Container, Row, Col } from 'reactstrap';


const Background = {
  backgroundColor: "#DCDCDC"
 }
export default class App extends Component {


    render() {
        return (
    <div style={Background}>
      <Row>
        <Col sm="12">
        <Example/>
        </Col>


      </Row>

      <Container>

      <Row>

        <Col xs="2">
       <Navigation/>
        </Col>

    <Col sm="10" className="d-flex flex-wrap justify-content-around">
     
      {/* <CardProduct/> */}
      {/* <HomePage/> */}
      <MapBasics/>
    </Col>
      </Row>
    </Container>
    </div>
        );
    }
}