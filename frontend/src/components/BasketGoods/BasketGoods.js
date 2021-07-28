import React, { useState, useEffect } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaCartPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import CardItemBasket from '../CardItemBasket/CardItemBasket';

// import { Link } from 'react-router-dom';
// import OrderPage from '../orderpage/orderpage.js';
import './BasketGoods.css';

function BasketGoods(props) {

    const [product, setItems] = useState([]);

    // const [goodsAmount, _setGoodsamount] = useState([]);
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // const setGoodsamount = (id, value) => {
    //     itemsСart(goodsAmount);
    //     _setGoodsamount([...goodsAmount, { id: id, count: value }]);

    // }

    // function itemsСart() {
    //     goodsAmount.reverse().filter((thing, index, self) =>
    //         index === self.findIndex((t) => (
    //             t.id === thing.id)))
    // }

    let history = useHistory();

    function handleClick() {
        history.push("/order");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const goodsForModeration = { mail: mail, name: name, phone: phone };

        fetch('/api/goods', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goodsForModeration)
        }).then(() => {
            console.log('OK');
            // eslint-disable-next-line react/prop-types
            props.clearBasket();
            setTimeout(() => {
                handleClick();
            }, 2000)
        })
    }


    useEffect(() => {
        fetch('/api/goods')
            .then(res => res.json())
            .then((result) => setItems(result))
            .catch((e) => console.log(e))
    }, [])

    const productToOrder = product.filter((a1) => (props.goodsForOrder.find(a2 => a1.id === a2)));


    return (
        <>
            <div className="basket-title">
                <h3>
                    Корзина товаров <FaCartPlus />
                </h3>
            </div>
            <div className="d-flex justify-content-between">
                <Container className="mb-5 goods-to-order" >
                    {productToOrder.map((item) => (
                        <>
                            <CardItemBasket
                                item={item}
                                productToOrder={productToOrder}
                                handleDeleteElement={props.handleDeleteElement} />
                        </>
                    ))}
                </Container>
                <Form className="form-basket" onSubmit={handleSubmit}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email"
                                name="email"
                                id="exampleEmail"
                                required
                                placeholder="Введите email"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleUsername">Имя</Label>
                            <Input type="username"
                                name="username"
                                id="exampleUsername"
                                required
                                placeholder="Введите имя"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePhone">Телефон</Label>
                            <Input type="phone"
                                name="phone"
                                id="examplePhone"
                                required
                                placeholder="Введите телефон"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </FormGroup>
                        <Button className="btn btn-success mt-3">
                            Оформить заказ</Button>
                        {/* <Button className="btn btn-primary" */}
                        {/* // disabled={props.goodsForOrder.length === 0 ? disabled : ''}> */}
                        {/* Оформить заказ</Button> */}
                    </Col>
                </Form>
            </div>
        </>
    );
}
BasketGoods.propTypes = {
    goodsForOrder: PropTypes.array,
    handleDeleteElement: PropTypes.func,
    productToOrder: PropTypes.array
}

export default BasketGoods;
