import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import CardItem from '../CardItem';
import PropTypes from 'prop-types';


function CardProduct(props) {

  const addGoodToBasket = props.addGoodToBasket;

  const [product, setItems] = useState([]);
  // const  goodsForOrder  = props.goodsForOrder;


  useEffect(() => {
    fetch('/api/goods')
      .then(res => res.json())
      .then((result) => setItems(result))
      .catch((e) => console.log(e))
  }, [])


  return (
    <> 
    {/* {console.log(goodsForOrder.find(el => el.id === item.id))} */}
      {product.map((item) => (
        <Col key={item.id} sm="3" className="d-flex p-4">
          <CardItem 
            preOrdered={props.goodsForOrder.find(i => i === item.id)}
            addGoodToBasket={addGoodToBasket}
            item={item} />
        </Col>
      ))}
    </>
  );
}

CardProduct.propTypes = {
  goodsForOrder: PropTypes.array,
  addGoodToBasket: PropTypes.array,
}

export default CardProduct;


