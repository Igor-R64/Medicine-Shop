import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import { FaCartPlus, FaRubleSign } from "react-icons/fa";
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import OrderPage from '../orderpage/orderpage.js';
import './BasketGoods.css';

// eslint-disable-next-line no-unused-vars
function BasketGoods(props) {

    const [product, setItems] = useState([]);

    const [goodsAmount, _setGoodsamount] = useState([]);
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const setGoodsamount = (id, value) => {
        _setGoodsamount([...goodsAmount, {id: id, count: value}]);

    }

    let history = useHistory();

    function handleClick() {
        history.push("/order");
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        const goodsForModeration = { count: mail, title: name, price: goodsAmount };

        fetch('/api/goods', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(goodsForModeration)
        }).then(() => {
            console.log('OK');
            // eslint-disable-next-line react/prop-types
            props.clearBasket();
            setTimeout(()=>{
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
                                            value={goodsAmount.length === 0 ? null : goodsAmount.filter(obj => obj.id === item.id)}
                                            onChange={(e) =>  setGoodsamount(item.id, e.target.value)}>
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
                           <Button className="btn btn-primary"
                            disabled={props.goodsForOrder.length === 0 ? disabled : ''}>
                               Оформить заказ</Button>
                        </Col>
                    

                </Form>
                <p>{mail}</p>
                <p>{name}</p>
                <p>{phone}</p>
                <p>{JSON.stringify(goodsAmount)}</p>



            </Container>


        </>
    );
}

export default BasketGoods;
