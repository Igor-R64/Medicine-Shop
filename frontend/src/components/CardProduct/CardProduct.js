import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import CardItem from '../CardItem';


function CardProduct(props) {

  // eslint-disable-next-line react/prop-types
  const addGoodToBasket = props.addGoodToBasket;

  const [product, setItems] = useState([]);
// eslint-disable-next-line react/prop-types
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
        // eslint-disable-next-line react/jsx-key
        <Col sm="3" className="d-flex p-4">
          <CardItem
          // eslint-disable-next-line react/prop-types
            // preOrdered={goodsForOrder.find(i => i.id === item.id)}
            addGoodToBasket={addGoodToBasket}
            item={item} />
        </Col>
      ))}
    </>
  );
}

export default CardProduct;


