import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const OrderPage = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Дорогой друг!</h1>
        <p className="lead">Спасибо тебе, что выбрал наш магазин.</p>
        <hr className="my-2" />
        <p>Все товары будут переданы в доставку</p>
        <p className="lead">
          <Button color="primary">Вернутся на главную</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default OrderPage;