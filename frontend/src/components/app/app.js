import React, {Component} from 'react';
import CardProduct from '../card';
import Navigation from '../navigation';
import { Container, Row, Col, Media} from 'reactstrap';


export default class App extends Component {
   
    render() {
        return (
    <>
    <Container>
      <Row>
        <Col>
        Medicine SHOP
        <Media object data-src="" alt="G" />
        </Col>
      </Row>
      <Row>
        <Col xs="2">
       <Navigation/>
        </Col>

    <Col xs="3">
    <CardProduct/>
    <CardProduct/>
    <CardProduct/>
    </Col>
      </Row>
      <Row>
        <Col>qqqq</Col>
      </Row>
    </Container>
    </>
        );
    }
}