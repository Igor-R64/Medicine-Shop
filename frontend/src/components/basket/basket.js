import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import { FaCartPlus, FaRubleSign } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import OrderPage from '../orderpage/orderpage.js';
import './basket.css';

// eslint-disable-next-line no-unused-vars
function BasketGoods(props) {

    const [product, setItems] = useState([]);

    const [select, setSelect] = useState('1');
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const goodsForModeration = { count: mail, title: name, price: phone };
        console.log(goodsForModeration);

        fetch('/api/goods', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(goodsForModeration)
        }).then(() => {
            console.log('OK');
        })
    }




    useEffect(() => {
        fetch('/api/goods')
            .then(res => res.json())
            .then((result) => setItems(result))
            .catch((e) => console.log(e))
    }, [])

    // eslint-disable-next-line react/prop-types
    const productToOrder = product.filter((a1) => (props.goodsForOrder.find(a2 => a1.id === a2)));




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
                                        <Input
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            value={select}
                                            onChange={(e) => setSelect(e.target.value)}>
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

                <Form onSubmit={handleSubmit}>
                    <Col sm={5}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email"
                                name="email"
                                id="exampleEmail"
                                required
                                placeholder="with a placeholder"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleUsername">Имя</Label>
                            <Input type="username"
                                name="username"
                                id="exampleUsername"
                                required
                                placeholder="username placeholder"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePhone">Телефон</Label>
                            <Input type="phone"
                                name="phone"
                                id="examplePhone"
                                required
                                placeholder="phone placeholder"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </FormGroup>
                   
                    
                        {/* <Link to='/order'> */}
                            <Button className="btn btn-primary">Оформить заказ</Button>
                        {/* </Link> */}
                        </Col>
                    

                </Form>
                <p>{mail}</p>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{select}</p>



            </Container>


        </>
    );
}

export default BasketGoods;
