import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { FaRubleSign } from 'react-icons/fa';
import CardItem from '../carditem';


function CardProduct (props) {

  const setCount = props.setCount;

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
          <Col sm="4" className="d-flex p-4">
          <CardItem
          setCount={setCount}
          item={item}/>
        </Col>        
        ))}
      </>
    );
  }
    
export default CardProduct;
    

  