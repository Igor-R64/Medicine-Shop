import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { FaRubleSign } from 'react-icons/fa';


function CardProduct () {

  const [product, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api/goods')
      .then(res => res.json())
      .then((result) => setItems(result))
  }, [])
  
 
    return (
      <>
        {product.map((item) => (
          <Col sm="4" className="d-flex p-4">
          <Card>
          <CardImg  top width="50%" height= "250px" src={item.img} alt="img" />
          <CardBody key={item.id}>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{item.type}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{item.price} <FaRubleSign/> </CardSubtitle>
          <Button onClick={() => setCount(count + 1)}>Купить {count}</Button>

        </CardBody>
        </Card>
        </Col>
         
         
        ))}
      </>
    );
  }
    
export default CardProduct;
    

  