import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaCartPlus } from "react-icons/fa";
import CardItem from '../carditem';
import './cart.css';

function CartGoods () {


    return (
<>
    <div>
        <p>
        Корзина товаров <FaCartPlus/>
        </p>
    </div>

    <Container>
      <Row>
        <Col id='border' xs="9" className="d-flex ">
            <div>
                <img id='image' src="https://s3.images-iherb.com/mli/mli00952/w/83.jpg" alt="альтернативный текст"/>
            </div>
            <div>
описание и цена
            </div>
            <div>
                количество
            </div>

        </Col>
        <Col xs="3">Всего:</Col>
      </Row>
    </Container>
</>
    );
}

export default CartGoods;
