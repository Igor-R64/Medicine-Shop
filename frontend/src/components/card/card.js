import React, { useState, useEffect } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';


function CardProduct () {

  const [product, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/goods')
      .then(res => res.json())
      .then((result) => setItems(result))
  }, [])
  
 
    return (
      <ul>
        {product.map((item) => (
          <li key={item.id}>
            {item.type} {item.title}
          </li>
        ))}
      </ul>
    );
  }
    
export default CardProduct;

      //   <Col sm="4" className="p-4">
      // <Card>
      // <CardImg  top width="100%" src="" alt="Card image cap" />
      // <CardBody>
      //     <CardTitle tag="h5">Название</CardTitle>
      //     <CardSubtitle tag="h6" className="mb-2 text-muted">Группа товаров</CardSubtitle>
      //     <CardText>Описание</CardText>
      //     <CardSubtitle tag="h6" className="mb-2 text-muted">Цена</CardSubtitle>
      //     <Button>Купить</Button>
      //   </CardBody>
      // </Card>
      // </Col>
          
    

  