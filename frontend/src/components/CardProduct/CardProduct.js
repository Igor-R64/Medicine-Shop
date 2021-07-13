import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import CardItem from '../CardItem';


function CardProduct(props) {

  // eslint-disable-next-line react/prop-types
  const addGoodToBasket = props.addGoodToBasket;

  const [product, setItems] = useState([]);


  useEffect(() => {
    fetch('/api/goods')
      .then(res => res.json())
      .then((result) => setItems(result))
      .catch((e) => console.log(e))
  }, [])


  return (
    <>
      {product.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <Col sm="3" className="d-flex p-4">
          <CardItem
            addGoodToBasket={addGoodToBasket}
            item={item} />
        </Col>
      ))}
    </>
  );
}

export default CardProduct;


