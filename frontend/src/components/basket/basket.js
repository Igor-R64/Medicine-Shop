import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Alert, Button  } from 'reactstrap';
import { FaCartPlus, FaRubleSign } from "react-icons/fa";
import OrderPage from '../orderpage/orderpage.js';
import './basket.css';

// eslint-disable-next-line no-unused-vars
function BasketGoods(props) {

    const [product, setItems] = useState([]);



    useEffect(() => {
        fetch('/api/goods')
            .then(res => res.json())
            .then((result) => setItems(result))
            .catch((e) => console.log(e))
    }, [])

    // eslint-disable-next-line react/prop-types
    const productToOrder = product.filter((a1) => (props.goodsForOrder.find(a2 => a1.id === a2.id)));


    return (
        <>
            <div>
                <p>
                    Корзина товаров <FaCartPlus />

                </p>
            </div>
            <Container >
                {productToOrder.map((item) => (

                    <Row key={item.id}>
                        <Col id='border' xs="12" className="d-flex ">
                            <div>
                                <img id='image' src={item.img} alt="альтернативный текст" />
                            </div>
                            <div className="offset-md-1">
                                {item.type}
                            </div>
                            <div className="offset-md-2">
                                {item.title}
                            </div>

                            <div className="offset-md-1">
                                <FaRubleSign /> {item.price}
                            </div>
                            <div className="offset-md-1">
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleSelect">Количество</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Form>
                            </div>

                        </Col>

                    </Row>





                ))}

                <Col xs="3" className="offset-md-9"><Alert color="primary">
                    Всего:
                </Alert></Col>
            </Container>
            <div>
      <Button color="primary">Оформить заказ</Button>{' '}
      
    </div>

        </>
    );
}

export default BasketGoods;
