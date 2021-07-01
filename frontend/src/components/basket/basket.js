import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {FaCartPlus} from "react-icons/fa";
import './basket.css';

function BasketGoods(props) {

        const [product, setItems] = useState([]);

        // eslint-disable-next-line react/prop-types
        const productToOrder = product.filter(count => props.count === count.id);


    useEffect(() => {
      fetch('/api/goods')
        .then(res => res.json())
        .then((result) => setItems(result))
        .catch((e) => console.log(e))
    }, [])


    return (
        <>
        <div>
                <p>
                    Корзина товаров <FaCartPlus />
                </p>
            </div>

        {productToOrder.map((item) => (
            <Container key={item.id}>
            <Row>
                <Col id='border' xs="9" className="d-flex ">
                    <div>
                        <img id='image' src={item.img} alt="альтернативный текст" />
                    </div>
                    <div>
                    {item.title} и {item.price}
                    </div>
                    <div>
                        количество
                    </div>

                </Col>
                <Col xs="3">Всего:</Col>
            </Row>

            <span>Заказать</span>
        </Container>
        
      ))}
        </>
    );
}

export default BasketGoods;
