import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navigation({ count }) {


  return (
    <div>
      <hr />
      <Nav vertical >
        <NavItem>
          <Link to='/'>Главная</Link>
        </NavItem>
        <NavItem>
          <Link to='/products'>Товары</Link>
        </NavItem>
        <NavItem>
          <Link to='/basket'> Корзина </Link><span className="badge bg-primary rounded-pill">{count}</span>
        </NavItem>
        <NavItem>
          <Link to='/contacts'>Контакты</Link>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default Navigation;
